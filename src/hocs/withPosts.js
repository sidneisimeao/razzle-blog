
import React from 'react';
import { Consumer } from "AppContext";

const withPosts = WrappedComponent => ( props =>
    <Consumer>
        {({ posts }) => <WrappedComponent {...props} posts={posts} />}
    </Consumer>
);

export default withPosts;