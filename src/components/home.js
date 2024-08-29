import React, { Component } from 'react';

//Importamos el componente para que lo pueda coger
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <RecentPosts />
        </div>
      </div>
    );
  }
}
