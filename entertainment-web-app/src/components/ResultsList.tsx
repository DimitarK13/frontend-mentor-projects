import { type Categories, type ItemType } from '../types';

import Preview from './cards/Preview';

interface DefaultTypes {
  title: string;
  data: ItemType[];
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
              thumbnail={item.thumbnail}
            />
          );
        })}
      </ul>
    </section>
  );
}
