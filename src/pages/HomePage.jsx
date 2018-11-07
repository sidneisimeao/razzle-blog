import React, { Fragment } from 'react'
import Helmet from 'react-helmet';
import Card from 'components/card/Card';
import withPosts from 'hocs/withPosts';
import withTheme from "hocs/withTheme";
import { splitPosts } from "helpers/splitPosts";

const HomePage = ({ themes, posts, host }) => { 

    const postsSplit = splitPosts(posts, 3);

    const allPosts = postsSplit.map( (postsRow, rowNum) => {
        return (
        <div key={rowNum} className="columns is-centered">
          {postsRow.map(post =>{    
            let theme  = themes[(post.category.toLowerCase())] || themes.js;
          return(
            <div key={post.slug} className="column is-one-third">
                <Card theme={theme} post={post} />
            </div>
          )})}
        </div>
        )
    });

  return (
    <Fragment>
      <Helmet>
        <title>Artigos sobre React, Javascript, Html, CSS e muito mais.</title>
        <link rel="canonical" href={host} />
        <meta name="description" content="Tudo sobre React, Javascript, SEO e Tecnología geral. Acesse o Blog e fique atualizado" />
        <meta property="og:url" content={host} />
        <meta property="og:title" content="Página inicial, postagens mais recentes" />
        <meta property="og:site_name" content="Sidnei Simmon" />
        <meta property="og:description" content="Blog de desenvolvimento Web, React, Javascript, SEO e Tecnología geral" />
      </Helmet>
      <div className="main-content">
          <div className="container">      
               {allPosts}
          </div>
        </div>
    </Fragment>
  )
}
export default withPosts(withTheme(HomePage));

