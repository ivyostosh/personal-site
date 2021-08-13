import React from 'react';
import dayjs from 'dayjs';
import articles from '../data/projects';

import Main from '../layouts/Main';

const ArticlePage = ({ match }) => {
  const { name } = match.params;

  const matchingArticle = articles.find((article) => article.name === name);
  return matchingArticle
    ? (

      <Main>
        <h1>{matchingArticle.title}</h1>
        <time className="published">{dayjs(matchingArticle.date).format('MMMM, YYYY')}</time>
        <br />
        <br />
        {matchingArticle.content.map((paragraph) => <p key={matchingArticle.title}>{paragraph}</p>)}
      </Main>
    ) : (
      <h1>Uh oh, looks like that article does not exist</h1>
    );
};

export default ArticlePage;
