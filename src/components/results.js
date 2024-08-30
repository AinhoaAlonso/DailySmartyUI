import React, { Component} from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";

class Results extends Component{
    handleSearchBarSubmit(query) {
        console.log("Manejo de la barra busqueda en results", query);
    }
    render(){
        return(
            <div>
                <Logo size ={55}/>
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
            </div>
        )
    }
}
export default Results;