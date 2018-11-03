import React from 'react'
import Post from 'components/posts/Post';
import withPosts from 'hocs/withPosts';

const postBySlug = ( posts,  slug) => posts.find( post => post.slug === slug );

const Posts = ({ posts,  match }) => {
  const post = postBySlug(posts, match.params.slug );
  return !!post ? <Post key={post.slug} {...post} /> : []    
}

export default withPosts(Posts);
