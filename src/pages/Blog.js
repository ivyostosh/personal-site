import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import articles from '../data/blog';

import Main from '../layouts/Main';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const ArticlePage = ({ match }) => {
  const { name } = match.params;

  const matchArticle = articles.find((article) => article.name === name);

  // uses babel to load contents of file
  const markdown = raw(`../data/blog/${name}.md`);
  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return matchArticle
    ? (

      <Main
        title="About"
        description="Learn about Ivy"
      >
        <article className="post markdown" id="about">
          <header>
            <div className="title">
              {/* <h2 data-testid="heading"><Link to="/about">About Me</Link></h2> */}
              {/* <p>(in about {count} words)</p> */}
              <h2>{matchArticle.title}</h2>
              <p>(in about {count} words)</p>
              <time className="published">{dayjs(matchArticle.date).format('MMMM, YYYY')}</time>
            </div>
          </header>
          <ReactMarkdown
            source={markdown}
            renderers={{
              Link: LinkRenderer,
            }}
            escapeHtml={false}
          />
        </article>
      </Main>
    ) : (
      <h1>Uh oh, looks like that article does not exist</h1>
    );
};

export default ArticlePage;

// const About = () => (
//   <Main
//     title="About"
//     description="Learn about Ivy"
//   >
//     <article className="post markdown" id="about">
//       <header>
//         <div className="title">
//           <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
//           <p>(in about {count} words)</p>
//         </div>
//       </header>
//       <ReactMarkdown
//         source={markdown}
//         renderers={{
//           Link: LinkRenderer,
//         }}
//         escapeHtml={false}
//       />
//     </article>
//   </Main>
// );

// export default About;
