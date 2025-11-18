import { type ItemType } from '../../types';

import Bookmark from './Bookmark';
import Header from './Header';

import playIcon from '../../assets/icon-play.svg';

export default function Preview({ title, year, category, rating, isBookmarked, isTrending, thumbnail }: ItemType) {
  return (
    <li className={`card ${isTrending ? 'trending' : ''}`}>
      <article className="card-inner">
        <div className="card-image-container">
          <picture>
            <source media="(min-width: 1080px)" srcSet={thumbnail.regular.large} />
            <source media="(min-width: 768px)" srcSet={thumbnail.regular.medium} />

            <img
              className="card-image"
              src={thumbnail.regular.small}
              alt={`${title} (${year}) Thumbnail`}
              loading="lazy"
            />
          </picture>

          <button className="card-play">
            <img className="card-play-icon" src={playIcon} alt="Play button" />
            <p className="card-play-text">Play</p>
          </button>

          <Bookmark isBookmarked={isBookmarked} />
        </div>

        <Header title={title} year={year} category={category} rating={rating} />
      </article>
    </li>
  );
}
