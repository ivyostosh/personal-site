import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ivy Jin</h2>
        <p><a href="mailto:ivyjin215@gmail.com">ivyjin215@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi there, I am Ivy Jin. I like building applications, solving problems,
        and optimizing processes.
      </p>
      <p>
        Started my college education and early career in accounting,
        I later found true interest in Computer Science.
        While working as a Data Analyst at Google, I pursued
        a Master&apos;s degree in Computer Science, and continued my side software projects.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ivy Jin <Link to="/">ivyjin.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
