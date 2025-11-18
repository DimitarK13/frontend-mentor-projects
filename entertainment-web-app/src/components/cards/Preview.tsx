import { type ItemType } from '../../types';

import Bookmark from './Bookmark';
import Header from './Header';
import Picture from './Picture';
import Play from './Play';

export default function Preview({ title, year, category, rating, isBookmarked, isTrending, thumbnail }: ItemType) {
  return (
    <li className={`card ${isTrending ? 'trending' : ''}`}>
      <article className="card-inner">
        <div className="card-image-container">
          <Picture isTrending={isTrending} thumbnail={thumbnail} alt={`${title} (${year}) Thumbnail`} />

          <Play />

          <Bookmark isBookmarked={isBookmarked} title={title} />
        </div>

        <Header title={title} year={year} category={category} rating={rating} />
      </article>
    </li>
  );
}
