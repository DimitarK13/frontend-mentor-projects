import { useData } from '../../context/useData';

import iconBookmarkEmpty from '../../assets/icon-bookmark-empty.svg';
import iconBookmarkFull from '../../assets/icon-bookmark-full.svg';

interface BookmarkTypes {
  isBookmarked: boolean;
  title: string;
}

export default function Bookmark({ isBookmarked, title }: BookmarkTypes) {
  const { toggleBookmark } = useData();

  return (
    <button className="card-bookmark" onClick={() => toggleBookmark(title)}>
      <img src={isBookmarked ? iconBookmarkFull : iconBookmarkEmpty} alt="Bookmark icon" />
    </button>
  );
}
