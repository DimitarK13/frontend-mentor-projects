import { useEffect, useState } from 'react';
import { type Country } from '../types';

import Card from '../components/Card';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3'
      );
      const results = await countries.json();

      if (!results) return;

      results.forEach((c: any) => {
        const country = {
          image: { src: c.flags.svg, alt: c.flags.alt },
          name: c.name.official,
          population: c.population,
          region: c.region,
          capital: c.capital[0],
          code: c.cca3,
        };

        setCountries((prevCountries) => [...prevCountries, country]);
      });
    };
    fetchCountries();
  }, []);

  return (
    <section className="s-home">
      {countries.map((country) => (
        <Card key={country.code} country={country} />
      ))}
    </section>
  );
}
