import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// import axios from 'axios';
// import { ThemeProvider } from 'styled-components';
import Hamburger from './Hamburger';
import routes from '../../data/routes';
import Toggle from '../Themes/Toggler';
// import { ReferenceDataContext } from '../Themes/ReferenceTheme';
// import useDarkMode from '../Themes/useDarkMode';
import { ThemeContext } from '../Themes/ThemeContext';
// import { lightTheme, darkTheme } from '../Themes/Theme';
// import GlobalStyle from '../Themes/GlobalStyle';

// export const [theme, themeToggler] = {
//   useDarkMode()
// };

// const HeaderContainer = styled.header`
//   background: ${(props) => props.theme.myColor};
// `;

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const theme = useContext(ThemeContext);
  const onClick = () => {
    if (theme.state.theme === 'dark') {
      theme.dispatch({ type: 'light' });
      window.localStorage.setItem('theme', 'light');
    } else {
      theme.dispatch({ type: 'dark' });
      window.localStorage.setItem('theme', 'dark');
    }
  };
  // const [isLoading, setIsLoading] = useState(false);
  // const { theme, setTheme } = useContext(ReferenceDataContext);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get('PATH_TO_THE_API')
  //     .then((response) => response.data)
  //     .then(setTheme)
  //     .finally(() => setIsLoading(false));
  // }, [axios, setTheme]);

  // const renderTypesList = () => {
  //   setTheme.map((type) => <li>{ type }</li>);
  // };
  // const [theme, themeToggler] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <header id="header">
      {/* <HeaderContainer> */}
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
      {/* <ThemeProvider theme={themeMode}> */}
      {/* <GlobalStyle /> */}
      <div className="theme-icon-container"><Toggle theme={theme.state.theme} toggleTheme={onClick} /></div>
      {/* </ThemeProvider> */}
      <Hamburger />
      {/* </HeaderContainer> */}
    </header>
  );
};

export default Navigation;
