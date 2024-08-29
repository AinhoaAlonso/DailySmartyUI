//Con este componente voy a recuperar los datos que quiero coger de la API para mostrarlos en la pantalla de inicio, los 3 posts
import React, {Component} from "react";

export default class Post extends Component{
    render(){
        return(
            <li>
                {this.props.title}
            </li>
        )
    }
}