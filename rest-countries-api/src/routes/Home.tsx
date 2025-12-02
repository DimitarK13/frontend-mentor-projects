import { useEffect, useState } from 'react';
import { type Country, type CountryFull } from '../types';
import { fetchCountries, fetchCountriesByName, fetchCountriesByRegion } from '../util/fetch';

import Card from '../components/Card';
import Filters from '../components/Filters';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const transformCountry = (c: CountryFull): Country => ({
    image: { src: c.flags.svg, alt: c.flags.alt },
    name: c.name.common,
    population: c.population,
    region: c.region,
    capital: c.capital?.[0] || 'N/A',
    code: c.cca3,
  });

  useEffect(() => {
    const loadCountries = async () => {
      setIsLoading(true);

      const results = await fetchCountries();
      const transformedCountries = results.map(transformCountry);

      setCountries(transformedCountries);
      setIsLoading(false);
    };

    loadCountries();
  }, []);

  const handleRegion = async (region: string | undefined) => {
    setIsLoading(true);

    if (!region) {
      const results = await fetchCountries();
      const transformedCountries = results.map(transformCountry);
      setCountries(transformedCountries);
    } else {
      const results = await fetchCountriesByRegion(region);

      if (results) {
        const transformedCountries = results.map(transformCountry);
        setCountries(transformedCountries);
      }
    }

    setIsLoading(false);
  };

  const handleSearch = async (search: string | undefined) => {
    setIsLoading(true);

    if (!search) {
      const results = await fetchCountries();
      const transformedCountries = results.map(transformCountry);
      setCountries(transformedCountries);
    } else {
      const results = await fetchCountriesByName(search);

      if (results) {
        const transformedCountries = results.map(transformCountry);
        setCountries(transformedCountries);
      }
    }

    setIsLoading(false);
  };

  return (
    <section className="s-home">
      <div className="s-home__filters">
        <Filters onRegionChange={handleRegion} onSearch={handleSearch} />
      </div>

      <div className="s-home__grid">
        {isLoading && <p>Loading...</p>}
        {!isLoading && countries.map((country) => <Card key={country.code} country={country} />)}
      </div>
    </section>
  );
}
