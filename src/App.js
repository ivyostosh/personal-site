import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './layouts/Main'; // fallback for lazy pages
import GlobalStyle from './components/Themes/GlobalStyle';
import useDarkMode from './components/Themes/useDarkMode';
import Toggle from './components/Themes/Toggler';
import { lightTheme, darkTheme } from './components/Themes/Themes';
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => {
  // const [theme, setTheme] = useState('light');
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (

    <BrowserRouter basename={PUBLIC_URL}>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyle />
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Suspense fallback={<Main />}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/stats" component={Stats} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
              <Route component={NotFound} status={404} />
            </Switch>
          </Suspense>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
