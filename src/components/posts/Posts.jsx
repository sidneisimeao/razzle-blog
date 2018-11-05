import React from 'react';

import Resume from 'components/posts/Resume';
import withPosts from 'hocs/withPosts';

const Posts = ({ posts }) => ( posts || []).map( post => <Resume key={post.slug} {...post} />)

export default withPosts(Posts);