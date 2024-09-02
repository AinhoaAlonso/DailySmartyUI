//Componente para que nos muestre los resultados filtrados desde la barra de búsqueda

import React, {Component} from "react";
import { connect } from "react-redux";


class ResultsPosts extends Component{
    render(){
        return(
            <ul className="results-posts">
                <div className="results-posts-wrapper">
                    <div className="results-posts-posts">
                        Funciona
                    </div>
                </div>
            </ul>
        );
    }
}
//configurar nuestro mapa de estado, de momento no va a funcionar, pero esto nos va a dar acceso a nuestros resultados filtrados
function mapStateToProps(state) {
    return {
        state
    }
}

export default ResultsPosts;