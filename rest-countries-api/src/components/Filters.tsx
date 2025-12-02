import searchIcon from '../assets/search-icon.svg';

interface FiltersTypes {
  onRegionChange: (r: string) => void;
  onSearch: (s: string) => void;
}

export default function Filters({ onRegionChange, onSearch }: FiltersTypes) {
  return (
    <div className="c-filters">
      <div className="c-filters__search">
        <img className="c-filters__search-icon" src={searchIcon} alt="Search Icon" />
        <input
          className="c-filters__search-input input"
          type="search"
          name="search"
          placeholder="Search for a country…"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <select
        className="c-filters__select input"
        name="region"
        id="region"
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
