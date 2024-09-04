import React, { Component} from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsPosts from "./resultsPosts";

//Se utiliza para conectar el componente de React con el store de Redux.
import { connect } from "react-redux";
// importa todas las acciones definidas en el archivo actions/index.js
import * as actions from "../actions";

class Results extends Component{
    //funcion de la barra de busqueda con el argumento que le pasamos desde searchbar.js
    handleSearchBarSubmit(query) {
        console.log("Manejo de la barra busqueda en results", query);
        this.props.fetchPostsWithQuery(query);
    }
    render(){
        return(
            <div className="results">
                <Logo size ={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                <ResultsPosts />
            </div>
        )
    }
}

//connect es una función que conecta un componente de React al store de Redux.
//1º argumento null, lo que significa que este componente no necesita acceder a ningún estado global específico de Redux (es decir, no necesita leer nada del store). Necesita leer cada post que le pasamos
//2º argumento actions, todas las acciones importadas como props al componente RecentPosts. Esto permite que RecentPosts llame a this.props.fetchRecentPosts().
export default connect(null, actions) (Results);
