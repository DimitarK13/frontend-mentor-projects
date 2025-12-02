import { useEffect, useState } from 'react';
import { type Country, type CountryFull } from '../types';
import { fetchCountries } from '../util/fetch';

import Card from '../components/Card';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const results = await fetchCountries();

      results.forEach((c: CountryFull) => {
        const country = {
          image: { src: c.flags.svg, alt: c.flags.alt },
          name: c.name.common,
          population: c.population,
          region: c.region,
          capital: c.capital[0],
          code: c.cca3,
        };

        setCountries((prevCountries) => [...prevCountries, country]);
      });

      setIsLoading(false);
    };
    fetch();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="s-home">
      {countries.map((country) => (
        <Card key={country.code} country={country} />
      ))}
    </section>
  );
}
