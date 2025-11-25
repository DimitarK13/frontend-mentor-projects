import { useEffect, useState } from 'react';

import darkModeIcon from '../assets/dark-mode-icon.svg';
import lightModeIcon from '../assets/light-mode-icon.svg';

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleTheme = () => {
    setDarkTheme((currTheme) => !currTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-dark-theme', darkTheme ? 'true' : 'false');
  }, [darkTheme]);

  return (
    <header className="c-header">
      <div className="container">
        <div className="c-header__layout">
          <h1 className="c-header__title">Where in the world?</h1>

          <button className="c-header__toggle" onClick={handleTheme}>
            <img src={darkTheme ? lightModeIcon : darkModeIcon} alt="Toggle Theme Icon" />
            {darkTheme ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
}
