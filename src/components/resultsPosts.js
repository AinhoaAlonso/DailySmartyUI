//Componente para que nos muestre los resultados filtrados desde la barra de búsqueda

import React, {Component} from "react";
import { connect } from "react-redux";

import Post from "./post";


class ResultsPosts extends Component{
    renderPosts(){
        const posts = this.props.posts.map((post, index) => {
            return <Post {...post} key={index}  />
        })
        return posts;
    }

    render(){
        return(
            <ul className="results-posts">
                <div className="results-posts-wrapper">
                    <div className="results-posts-posts">
                        {this.renderPosts()}
                    </div>
                </div>
            </ul>
        );
    }
}
//configurar nuestro mapa de estado, de momento no va a funcionar, pero esto nos va a dar acceso a nuestros resultados filtrados
function mapStateToProps(state) {
    //return { state }
    return { 
        posts: state.results.resultsPosts
    }
}
///connect es una función que conecta un componente de React al store de Redux.
//1º argumento null, lo que significa que este componente no necesita acceder a ningún estado global específico de Redux . Necesita leer cada post que se le filtra
export default connect(mapStateToProps) (ResultsPosts);