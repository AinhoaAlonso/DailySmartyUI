import React, { Component } from 'react';

//Importamos el componente para que lo pueda coger
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class Home extends Component {
  //funcion de la barra de busqueda con el argumento que le pasamos desde searchbar.js
  handleSearchBarSubmit(query){
     console.log("Manejo de la barra de busqueda en home", query);
      //Esto nos lleva directamente a results
      this.props.history.push('/results');
  }
  
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar onSubmit={(query)=>this.handleSearchBarSubmit(query)} />
        </div>
        <div>
          <RecentPosts />
        </div>
      </div>
    );
  }
}
