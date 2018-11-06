import React, { Component } from 'react';
import PrimaryLayout from "layouts/PrimaryLayout";
import AppContext from "context";
import posts from 'posts/postsmap.json';
import "styles/css/app.css";

import * as themes from "themes";

class App extends Component {
  state = {
    posts: posts,
    themes: themes,
    host: "https://sidneisimmon.com"
  }

  render() {
    return (      
        <AppContext.Provider value={this.state}>
          <PrimaryLayout />
        </AppContext.Provider>    
    )
  }
}

export default App;