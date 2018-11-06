
import React from 'react';
import AppContext from "context";

const withTheme = WrappedComponent => (props =>
    <AppContext.Consumer>
        {({ theme }) => <WrappedComponent theme={theme} {...props} />}
    </AppContext.Consumer>
);

export default withTheme;