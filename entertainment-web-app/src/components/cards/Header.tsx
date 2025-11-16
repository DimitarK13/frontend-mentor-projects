import iconMovie from '../../assets/icon-category-movie.svg';
import iconSeries from '../../assets/icon-category-tv.svg';

type Categories = 'Movie' | 'TV Series';

interface HeaderTypes {
  title: string;
  year: number;
  category: Categories;
  rating: string;
}

export default function Header({ year, category, rating, title }: HeaderTypes) {
  return (
    <header className="card-header">
      <div className="card-header-info">
        <span>{year}</span>·
        <span>
          <img src={category === 'Movie' ? iconMovie : iconSeries} alt="icon" /> {category}
        </span>
        ·<span>{rating}</span>
      </div>

      <h3 className="card-header-title">{title}</h3>
    </header>
  );
}
