import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Navbar from 'components/navbar/Navbar';

const Loading = () => <div>Loading...</div>;

const HomePage = Loadable({
  loader: () => import('pages/HomePage'),
  loading: Loading,
});

const AboutPage = Loadable({
  loader: () => import('pages/AboutPage'),
  loading: Loading,
});

const PostPage = Loadable({
  loader: () => import('pages/PostPage'),
  loading: Loading,
});

const BlogPage = Loadable({
  loader: () => import('pages/BlogPage'),
  loading: Loading,
});

const PrimaryLayout = () => (
  <Fragment>
    <Navbar />
    <div className="main-content">
      <div className="container ">
        <div className="columns is-multiline is-mobile is-centered">
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/about"} component={AboutPage} />
            <Route exact path={"/blog"} component={BlogPage} />
            <Route path={"/blog/post/:slug"} component={PostPage} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PrimaryLayout;