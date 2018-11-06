import React from "react";

const { Provider, Consumer } = React.createContext({
    posts: []
});

export { Provider, Consumer };