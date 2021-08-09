import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';
import Toggle from '../Themes/Toggler';
import { ThemeContext } from '../Themes/ThemeContext';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const theme = useContext(ThemeContext);
  const onClick = () => {
    // Update theme
    if (theme.state.theme === 'dark') {
      theme.dispatch({ type: 'light' });
      window.localStorage.setItem('theme', 'light');
    } else {
      theme.dispatch({ type: 'dark' });
      window.localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="theme-icon-container"><Toggle theme={theme.state.theme} toggleTheme={onClick} /></div>
      <Hamburger />
    </header>
  );
};

export default Navigation;
