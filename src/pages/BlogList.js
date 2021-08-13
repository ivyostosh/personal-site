import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Blog/Cell';
import ArticlesList from '../components/article/article_list';
import data from '../data/blog';

const Blog = () => (
  <Main
    title="Blog"
    description="This is a tech free zone."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>I believe in the power of words ...</p>
        </div>
      </header>
      <ArticlesList articles={data} />
      {/* {data.map((project) => (
        <Link className="article-list-item" to={`/blog/${project.name}`} key={project.title}>
          <Cell
            data={project}
            key={project.title}
          />
        </Link>
      ))} */}
    </article>
  </Main>
);

export default Blog;
