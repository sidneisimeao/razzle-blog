import React, { Fragment } from 'react'

//import Card from 'components/card/Card';
import Posts from 'components/posts/Posts';

export default () => (
  <Fragment>    
    <div className="column is-centered is-full-mobile">
      <Posts />
    </div>
    <div className="column is-full-mobile is-one-third-tablet">
      Oi eu Sou o GOKU
    </div>
  </Fragment>
);
