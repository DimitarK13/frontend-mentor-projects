import Bookmark from './Bookmark';
import Header from './Header';

type Categories = 'Movie' | 'TV Series';

interface PreviewTypes {
  title: string;
  year: number;
  category: Categories;
  rating: string;
  isBookmarked: boolean;
  thumbnail: {
    small: string;
    medium: string;
    large: string;
  };
}

export default function Preview({ title, year, category, rating, isBookmarked, thumbnail }: PreviewTypes) {
  return (
    <li className="card">
      <article className="card-inner">
        <div className="card-image-container">
          <picture>
            <source media="(min-width: 1080px)" srcSet={thumbnail.large} />
            <source media="(min-width: 768px)" srcSet={thumbnail.medium} />

            <img className="card-image" src={thumbnail.small} alt={`${title} (${year}) Thumbnail`} loading="lazy" />
          </picture>

          <Bookmark isBookmarked={isBookmarked} />
        </div>

        <Header title={title} year={year} category={category} rating={rating} />
      </article>
    </li>
  );
}
