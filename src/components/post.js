//Con este componente voy a recuperar los datos que quiero coger de la API para mostrarlos en la pantalla de inicio, los 3 posts
import React, {Component} from "react";

export default class Post extends Component{
    //Esto solo se puede hacer si tuviesemos un array, lo dejo en el código por si necesito mirarlo en algun momento, pruebo con uno de nuestra API
    /*renderPlanets(){
        let planets = this.props.planets.map((planet, index) => {
            return <span className="post-director" key={index}>{planet}</span>
        })
        return planets;
    }*/

    render(){
        return(
            <li className="recent-post">
                <div className="recent-post-title">
                    {this.props.title}
                </div>
                {/*Como estoy utilizando otra API no tengo topics a los que llamar, llamo al director de la peli */}
                <div className="recent-post-director">
                    {/*this.renderPlanets()*/}
                    {this.props.director}
                </div>
                
            </li>
        )
    }
}