import React, { Fragment } from 'react'
import Helmet from 'react-helmet';
import Card from 'components/card/Card';
import withPosts from 'hocs/withPosts';
import withTheme from "hocs/withTheme";

const HomePage = ({ themes, posts, host }) => { 
  const description = "Tudo sobre React, Javascript, SEO e Tecnología geral. Acesse o Blog e fique atualizado";
  return (
    <Fragment>
      <Helmet>
        <title>Artigos sobre React, Javascript, Html, CSS e muito mais.</title>
        <link rel="canonical" href={host} />
        <meta name="description" content={description} />
        <meta property="og:url" content={host} />
        <meta property="og:title" content="Página inicial, postagens mais recentes" />
        <meta property="og:site_name" content="Sidnei Simmon" />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="main-content">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-one-third">
                <Card theme={themes.blue} />
              </div>
              <div className="column is-one-third">
                <Card theme={themes.yellow} />
              </div>
              <div className="column is-one-third">
                <Card theme={themes.blue}/>
              </div>              
            </div>           
          </div>
        </div>
    </Fragment>
  )
}
export default withPosts(withTheme(HomePage));

