import React, { Fragment } from 'react'
import Post from 'components/posts/Post';
import withPosts from 'hocs/withPosts';
import Helmet from 'react-helmet';
import { bySlug } from 'helpers/findPostBy';

const Posts = ({ posts, match, host }) => {

  const post = bySlug(posts, match.params.slug);

  if (!!post) {
    const { slug, title, date, resume } = post;
    const canonical = `${host}/blog/post/${slug}`;
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="description" content={resume} />
          <meta property="og:url" content={canonical} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={resume} />
        </Helmet>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body has-text-centered">
            <div className="container">
              <h2 className="subtitle">
                {date}
              </h2>
              <h1 className="title">
                {title}
              </h1>
              <h2 className="subtitle">
                {resume}
              </h2>
            </div>
          </div>
        </section>
        <div className="main-content">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-four-fifths">
                <Post key={slug} {...post} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return <div>Not Found</div>
}

export default withPosts(Posts);
