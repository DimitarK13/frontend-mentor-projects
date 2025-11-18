import searchIcon from '../assets/icon-search.svg';

interface SearchTypes {
  placeholder: string;
  onSearch: (query: string) => void;
}

export default function Search({ placeholder, onSearch }: SearchTypes) {
  return (
    <div className="search">
      <img className="search-icon" src={searchIcon} alt="Search icon" />

      <div className="search-wrap">
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
