
import React from 'react';
import AppContext from "context";

const withPosts = WrappedComponent => (props =>
    <AppContext.Consumer>
        {({ posts, ...rest }) => <WrappedComponent {...props} {...posts} {...rest} />}
    </AppContext.Consumer>
);

export default withPosts;