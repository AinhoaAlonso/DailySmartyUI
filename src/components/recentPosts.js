//Componente de clase llamado RecentPosts que está conectado a Redux para manejar y mostrar los "posts recientes".
import React, { Component} from "react";
//Se utiliza para conectar el componente de React con el store de Redux.
import { connect } from "react-redux";
// importa todas las acciones definidas en el archivo actions/index.js
import * as actions from "../actions";

import Post from "./post";
class RecentPosts extends Component{

    //se ejecuta una vez que el componente ha sido montado en el DOM.
    componentDidMount(){
        //lama a una acción de Redux llamada fetchRecentPosts(que la trae de actions/index.js). Esta acción probablemente se utiliza para realizar una operación asíncrona, como obtener posts recientes de una API, y luego actualizar el estado global de la aplicación.
        this.props.fetchRecentPosts();
    }
    //Creamos una funcion para que nos va a devolver los datos que le pidamos
    renderPosts = function (){
        //Lo mapeamo porque queremos acceder a la publicacion y la clave, nosotros cogemos otros datos porque es otra API
        const posts = this.props.recentPosts.map((post, index) => {
            //La vamos a poner una condicion para que solo devuelva 3 resultados, en vez de tener aqui un lista con los datos, voy a crear un componente post.js y lo voy a llamar desde aquí
            if (index <3){
                return(
                    //Estoy pasando todos los nombres de datos de post, todos los atributos gracias al operador de propagación{...}
                    <Post type="recent" 
                    {...post} key={index} />
                )
            }
        })
        return posts;
    }
    //define el contenido HTML que se va a mostrar en la pantalla.
    render(){
        return(
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">Recent Posts</div>
                    <ul className="recent-posts-posts">
                        {/*Aqui llamamos a la funcion */}
                        {this.renderPosts()}
            
                    </ul>
                </div>    
            </div>
        )
    }
}
//configurar nuestro mapa de estado, estamos teniendo acceso a nuestros posts
function mapStateToProps(state) {
    return {
        recentPosts: state.results.recentPosts
    }
}

//connect es una función que conecta un componente de React al store de Redux.
//1º argumento null, lo que significa que este componente no necesita acceder a ningún estado global específico de Redux. Necesita leer cada post que le pasamos
//2º argumento actions, todas las acciones importadas como props al componente RecentPosts. Esto permite que RecentPosts llame a this.props.fetchRecentPosts().
export default connect(mapStateToProps, actions) (RecentPosts);