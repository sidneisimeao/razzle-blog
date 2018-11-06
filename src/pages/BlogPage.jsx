import React, { Fragment } from 'react'
import Helmet from 'react-helmet';
import Posts from 'components/posts/Posts';

const canonical = "https://www.sidneisimmon.com/blog";
const description = "Blog sobre React, Javascript, SEO e Tecnología geral. Acesse o Blog e fique atualizado";

export default () => (
    <Fragment>
        <Helmet>
            <meta property="og:type" content="website" />
            <meta name="description" content={description} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content={`${canonical}`} />
            <link rel="canonical" href={`${canonical}`} />
            <meta property="og:title" content="Página inicial, postagens mais recentes" />
            <meta property="og:site_name" content="Sidnei Simmon" />
            <meta property="og:description" content={description} />
        </Helmet>     
    <div className="main-content">    
      <div className="container">     
        <div className="columns is-multiline is-mobile is-centered">
        <div className="column is-centered">
            <Posts />
        </div>
        </div>
      </div>
    </div>       
    </Fragment>
);
