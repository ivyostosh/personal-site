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
      <p>Hi there, I&apos;m Ivy. I like building applications, solving problems,
        and optimizing processes.
      </p>
      <p>
        Started my higher education and early career both in Accounting
        (still an active CPA in Virginia, US today),
        I later found true interest in Computer Science.
        While working as a Revenue Systems Analyst at Google, I purpused
        another M.S. degree in CS, and continued my side CS projects.
        I&apos;m now ready to embark on a new journey to pursure a full-time
        Software Enginner position.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ivy Jin <Link to="/">ivyostosh.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
