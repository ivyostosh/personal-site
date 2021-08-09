import React from 'react';
import articles from '../data/project/article';

import Main from '../layouts/Main';

const ArticlePage = ({ match }) => {
  const { name } = match.params;

  const matchingArticle = articles.find((article) => article.name === name);
  return matchingArticle
    ? (

      <Main>
        <h1>{matchingArticle.title}</h1>
        {matchingArticle.content.map((paragraph) => <p key={matchingArticle.title}>{paragraph}</p>)}
      </Main>
    ) : (
      <h1>Uh oh, looks like that article does not exist</h1>
    );
};

export default ArticlePage;
