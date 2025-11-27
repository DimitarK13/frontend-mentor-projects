import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import BackButton from '../components/BackButton';
import { type CountryFull as Country } from '../types';
import { formatPopulation } from '../util/format';
import Info from '../components/Info';
import { fetchCountry } from '../util/fetch';
import BorderCountry from '../components/BorderCountry';

export default function Single() {
  const { code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      const country = await fetchCountry(code!);
      setCountry(country);

      setIsLoading(false);
    };

    fetch();
  }, [code]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="s-single">
      <BackButton />

      {country && (
        <div className="s-single__item">
          <img className="s-single__flag" src={country.flags.svg} alt={country.flags.alt} />

          <div className="s-single__content">
            <h1 className="s-single__name">{country.name.common}</h1>

            <div className="s-single__info">
              <div>
                <Info
                  description="Native Name"
                  value={country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
                />
                <Info description="Population" value={formatPopulation(country.population)} />
                <Info description="Region" value={country.region} />
                <Info description="Subregion" value={country.subregion} />
                <Info description="Capital" value={country.capital[0]} />
              </div>

              <div>
                <Info description="Top Level Domain" value={country.tld?.[0]} />
                <Info
                  description="Currencies"
                  value={country.currencies && Object.values(country.currencies).map((item) => item.name)}
                />
                <Info description="Languages" value={country.languages && Object.values(country.languages)} />
              </div>
            </div>

            {country.borders && (
              <div className="s-single__border-countries">
                Border Countries:
                <div>
                  {country.borders?.map((country) => (
                    <BorderCountry key={country} countryCode={country} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
