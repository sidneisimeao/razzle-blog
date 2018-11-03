import React from 'react';
import PrimaryLayout from "layouts/PrimaryLayout";
import { Provider } from "AppContext";
import "styles/css/app.css";
import posts from 'posts/postsmap.json';

const App = () => (
  <Provider value={posts}>
    <PrimaryLayout />
  </Provider>
);

export default App;