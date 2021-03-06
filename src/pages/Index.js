import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Greeting from '../components/Template/Greeting';

const Index = () => (
  <Main
    description={"Ivy Jin's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <div>
            <p><Greeting /> </p>
          </div>
        </div>
      </header>
      <p> Welcome to my site. You can read more <Link to="/about">about me</Link>,
        check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats"> stats</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
