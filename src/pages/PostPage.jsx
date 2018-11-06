import React, { Fragment } from 'react'
import Post from 'components/posts/Post';
import withPosts from 'hocs/withPosts';
import Helmet from 'react-helmet';

const postBySlug = (posts, slug) => posts.find(post => post.slug === slug);

const Posts = ({ posts, match }) => {
  const post = postBySlug(posts, match.params.slug);
  return !!post ?
    <Fragment>
      <Helmet title={`${post.title}`} />
      <Post key={post.slug} {...post} />
    </Fragment>
    : []
}

export default withPosts(Posts);
