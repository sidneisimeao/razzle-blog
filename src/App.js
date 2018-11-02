import React, { Component } from 'react';
import localforage from "localforage";

import PrimaryLayout from "layouts/PrimaryLayout";
import { Provider } from "AppContext";

import "styles/css/app.css";

class App extends Component {    
    state = {
      hasError: '',
      posts:[]
    }

    componentDidMount() {
      this.hydrateStateWithLocalStorage();     
    }

    async hydrateStateWithLocalStorage(){
      try {

        const storage = {
          posts:[]
        };

        storage.posts = await localforage.getItem('posts');

        if(!storage.posts){
          const { posts } = await import('./posts.json');
          storage.posts = posts;
          localforage.setItem('posts', storage.posts );
        }

        this.setState({
          posts: storage.posts
        });
        
      } catch (error) {
        this.setState({
          hasError: error
        });
      } 
    }

    render(){        
      return (
        <Provider value={ this.state }>
              <PrimaryLayout />
        </Provider>
     )
    }
}

export default App;