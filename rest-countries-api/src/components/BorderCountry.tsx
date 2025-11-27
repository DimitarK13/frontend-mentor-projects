import { useEffect, useState } from 'react';
import { type CountryFull as Country } from '../types';
import { fetchCountry } from '../util/fetch';
import { Link } from 'react-router';

interface BorderCountryTypes {
  countryCode: string;
}

export default function BorderCountry({ countryCode }: BorderCountryTypes) {
  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const country = await fetchCountry(countryCode!);
      setCountry(country);

      setIsLoading(false);
    };

    fetch();
  }, [countryCode]);

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      {country && (
        <Link className="c-border-country" to={`/${country.cca3}`}>
          {country.name.common}
        </Link>
      )}
    </>
  );
}
