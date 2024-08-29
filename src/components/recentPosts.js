//Componente de clase llamado RecentPosts que está conectado a Redux para manejar y mostrar los "posts recientes".
import React, { Component} from "react";

//Se utiliza para conectar el componente de React con el store de Redux.
import { connect } from "react-redux";

// importa todas las acciones definidas en el archivo actions/index.js
import * as actions from "../actions";
class RecentPosts extends Component{

    //se ejecuta una vez que el componente ha sido montado en el DOM.
    componentDidMount(){
        //lama a una acción de Redux llamada fetchRecentPosts(que la trae de actions/index.js). Esta acción probablemente se utiliza para realizar una operación asíncrona, como obtener posts recientes de una API, y luego actualizar el estado global de la aplicación.
        this.props.fetchRecentPosts();
    }
    //define el contenido HTML que se va a mostrar en la pantalla.
    render(){
        return(
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">Recent Posts</div>
                    <ul className="recent-posts-posts">
                        <li>Recent Post 0</li>
                        <li>Recent Post 1</li>
                        <li>Recent Post 2</li>
                    </ul>
                </div>    
            </div>
        )
    }
}
//connect es una función que conecta un componente de React al store de Redux.
//1º argumento null, lo que significa que este componente no necesita acceder a ningún estado global específico de Redux (es decir, no necesita leer nada del store). De momento!!!
//2º argumento actions, todas las acciones importadas como props al componente RecentPosts. Esto permite que RecentPosts llame a this.props.fetchRecentPosts().
export default connect(null, actions) (RecentPosts);