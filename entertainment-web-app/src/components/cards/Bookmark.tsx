import iconBookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import iconBookmarkFull from '../../assets/icon-bookmark-full.svg';

interface BookmarkTypes {
  isBookmarked: boolean;
}

export default function Bookmark({ isBookmarked }: BookmarkTypes) {
  return (
    <button className="card-bookmark">
      <img src={isBookmarked ? iconBookmarkFull : iconBookmarkEmpty} alt="Bookmark icon" />
    </button>
  );
}
