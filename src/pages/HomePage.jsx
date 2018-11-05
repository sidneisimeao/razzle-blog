import React, { Fragment } from 'react'
import Helmet from 'react-helmet';
//import Card from 'components/card/Card';
import Posts from 'components/posts/Posts';

const canonical = "https://www.sidneisimmon.com";

export default () => (
  <Fragment>
    <Helmet>
      <meta property="og:type" content="website"/>
      <link rel="canonical" href={`${canonical}`} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={`${canonical}`} />
      <meta property="og:title" content="Página inicial, postagens mais recentes" />
      <meta property="og:site_name" content="Sidnei Simmon" />
      <meta property="og:description" content="Tudo sobre React, Javascript, SEO e Tecnología geral. Acesse o Blog e fique atualizado" />
    </Helmet>
    <div className="column is-centered is-full-mobile">
      <Posts />
    </div>
    <div className="column is-full-mobile is-one-third-tablet">

    </div>
  </Fragment>
);
