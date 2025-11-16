import logo from '../../assets/logo.svg';
import avatar from '../../assets/image-avatar.png';
import navHome from '../../assets/icon-nav-home.svg';
import navMovies from '../../assets/icon-nav-movies.svg';
import navSeries from '../../assets/icon-nav-tv-series.svg';
import navBookmark from '../../assets/icon-nav-bookmark.svg';
import NavItem from './NavItem';

export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Logo Icon" />

      <nav className="header-nav">
        <NavItem url="/" imageSrc={navHome} />
        <NavItem url="movies" imageSrc={navMovies} />
        <NavItem url="series" imageSrc={navSeries} />
        <NavItem url="bookmarked" imageSrc={navBookmark} />
      </nav>

      <img className="header-avatar" src={avatar} alt="Avatar Image" />
    </header>
  );
}
