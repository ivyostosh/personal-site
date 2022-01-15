import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const ArticlesListPage = () => (
  <Main
    title="Projects"
    description="Learn about Ivy Jin's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          {/* <p>Click on the project images to learn more ...</p> */}
        </div>
      </header>
      {data.map((project) => (
        // <Link className="article-list-item" to={`/projects/${project.name}`} key={project.title}>
        <Cell
          data={project}
          key={project.title}
        />
        // </Link>
      ))}
    </article>
  </Main>
);

export default ArticlesListPage;
