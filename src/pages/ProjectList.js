// import React from 'react';
// import { Link } from 'react-router-dom';

// import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/project/projects';
// import article from '../data/project/article';

// const ProjectList = () => (
//   <Main
//     title="Projects"
//     description="Learn about Ivy Jin's projects."
//   >
//     <article className="post" id="projects">
//       <header>
//         <div className="title">
//           <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
//           <p>Click on the project images to learn more ...</p>
//         </div>
//       </header>
//       {data.map((project) => (
//         <Cell
//           data={project}
//           key={project.title}
//         />
//       ))}
//     </article>
//   </Main>
// );

// export default ProjectList;

import React from 'react';
import ArticlesList from '../components/article/article_list';
import articles from '../data/project/article';

import Main from '../layouts/Main';

const ArticlesListPage = () => (
  <Main
    title="Projects"
    description="Learn about Ivy Jin's projects."
  >
    <h1>Projects</h1>
    <ArticlesList articles={articles} />
  </Main>
);

export default ArticlesListPage;
