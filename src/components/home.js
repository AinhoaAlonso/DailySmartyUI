//Vamos a conectat Home con redux para manejar los posts filtrador que traigamos
import React, { Component } from 'react';

//Importamos el componente para que lo pueda coger
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

//Se utiliza para conectar el componente de React con el store de Redux.
import { connect } from "react-redux";
// importa todas las acciones definidas en el archivo actions/index.js
import * as actions from "../actions";

class Home extends Component {
  
  //funcion de la barra de busqueda con el argumento que le pasamos desde searchbar.js
  handleSearchBarSubmit(query) {
    //console.log("Manejo de la barra busqueda en home", query);
    //Ponemos una devolucion de llamada con un funcion flecha, la idea es ralentizar un poco la aplicacion para que la experiencia de usuario sea mejor
    this.props.fetchPostsWithQuery(query, ()=>{
      //Esto nos lleva directamente a results
      this.props.history.push('/results');
    });
  }
  
  render() {
    return (
      <div className='home'>
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar page="home" onSubmit={(query)=>this.handleSearchBarSubmit(query)} />
        </div>
        <div>
          <RecentPosts />
        </div>
      </div>
    );
  }
}

//connect es una función que conecta un componente de React al store de Redux.
//1º argumento null, lo que significa que este componente no necesita acceder a ningún estado global específico de Redux (es decir, no necesita leer nada del store). Necesita leer cada post que le pasamos
//2º argumento actions, todas las acciones importadas como props al componente RecentPosts. Esto permite que RecentPosts llame a this.props.fetchRecentPosts().
//Aqui lo pongo asi porque ya tengo el export en la funcion
export default connect(null, actions) (Home);
