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

      <h1 className="sr-only">Entertainment Web App</h1>

      <nav className="header-nav">
        <NavItem url="/" image={{ src: navHome, alt: 'Home' }} />
        <NavItem url="movies" image={{ src: navMovies, alt: 'Movies' }} />
        <NavItem url="series" image={{ src: navSeries, alt: 'Series' }} />
        <NavItem url="bookmarked" image={{ src: navBookmark, alt: 'Bookmarks' }} />
      </nav>

      <img className="header-avatar" src={avatar} alt="Avatar Image" />
    </header>
  );
}
