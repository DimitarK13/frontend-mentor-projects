import { Link } from 'react-router';
import { type Country } from '../types';

interface CardTypes {
  country: Country;
}

export default function Card({ country }: CardTypes) {
  return (
    <Link to={country.code} className="c-card">
      <img className="c-card__flag" {...country.image} />

      <div className="c-card__content">
        <h2 className="c-card__name">{country.name}</h2>

        <div className="c-card__info">
          <p className="c-card__info-item">
            Population: <span>{country.population.toLocaleString('en-US')}</span>
          </p>
          <p className="c-card__info-item">
            Region: <span>{country.region}</span>
          </p>
          <p className="c-card__info-item">
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
