//Con este componente voy a recuperar los datos que quiero coger de la API para mostrarlos en la pantalla de inicio, los 3 posts
import React, {Component} from "react";

export default class Post extends Component{
    //Esto solo se puede hacer si tuviesemos un array, lo dejo en el código por si necesito mirarlo en algun momento, pruebo con uno de nuestra API, esto seria en la barra de la home
    /*renderPlanets(){
        let planets = this.props.planets.map((planet, index) => {
            return <span className="post-planet" key={index}>{planet}</span>
        })
        return planets;
    }*/
    //Igual que el ejemplo de arriba, vamos a crear como si tuvieramos un array para buscar los planetas en la pagina de resultados
    renderPlanets(){
        let planets = this.props.planets.map((planet, index) => {
            return (
                <div className="link-planets" key={index}>
                    <div className="link-planets-box">
                    </div>
                    <div className="link-planets-link">
                        <a href={planet}>Useful Links Planets #{index + 1}</a>
                    </div>
                </div>
            )
        })
        return planets;
    }

    render(){
        if (this.props.type === "recent"){
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
        }else if(this.props.type === "result"){
            return(
                <li className="result-post">
                    <div className="result-post-director">
                        {this.props.director}
                    </div>
                    <div className="results-post-title">
                        {this.props.title}
                    </div>
                    <div className="results-post-url">
                        {this.renderPlanets()}
                    </div>
                </li>
            )
        }
        
    }
}