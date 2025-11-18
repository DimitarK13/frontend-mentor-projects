import Preview from './cards/Preview';

type Categories = 'Movie' | 'TV Series';

interface DefaultTypesItem {
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
    trending?: {
      small: string;
      large: string;
    };
  };
}

interface DefaultTypes {
  title: string;
  data: DefaultTypesItem[];
  isTrending: boolean;
}

export default function ResultsList({ title, data, isTrending }: DefaultTypes) {
  return (
    <section className={`results ${isTrending ? 'trending' : ''}`}>
      <h2 className="results-header">{title}</h2>

      <ul className={`results-list ${isTrending ? 'slider' : ''}`}>
        {data.map((item) => {
          return (
            <Preview
              key={item.title}
              title={item.title}
              year={item.year}
              category={item.category as Categories}
              rating={item.rating}
              isBookmarked={item.isBookmarked}
              isTrending={isTrending ? item.isTrending : false}
              thumbnail={item.thumbnail.regular}
            />
          );
        })}
      </ul>
    </section>
  );
}
