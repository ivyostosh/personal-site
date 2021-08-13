import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const ArticlesList = ({ articles }) => (
  <div className="cell-container">
    <article className="posts">
      {articles.map((article) => (
        <Link className="article-list-item" to={`/blog/${article.name}`} key={article.title}>
          <header>
            <h3>{article.title}</h3>
            <time className="published">{dayjs(article.date).format('MMMM, YYYY')}</time>
          </header>
          <br />
          <p>{article.desc}</p>
        </Link>
      ))}
    </article>
  </div>
);

export default ArticlesList;
