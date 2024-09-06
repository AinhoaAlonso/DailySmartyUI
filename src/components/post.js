//Con este componente voy a recuperar los datos que quiero coger de la API para mostrarlos en la pantalla de inicio, los 3 posts
import React, {Component} from "react";
import AnimateHeight from "react-animate-height";

export default class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            //Por defecto la altura a cero que va a cambiar a medida que vengan los links de los planets
            height:0
        }
    }
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
                    {/*Aquí lo que vamos a hacer es que cuando pongas el raton encima del titulo abre una animacion de desplazamiento hacia abajo con los links de los planets y luego quitas el raton la quita */}
                    {/*Le amplia la altura a 100 y luego la baja a cero */}
                    <div className="result-post-title">
                        <a href= {this.props.url} 
                            onMouseEnter={() => this.setState({height: 70})}
                            onMouseLeave={() => this.setState({height: 0})}
                        >
                           {this.props.title} 
                        </a>
                        {/*Hacemos que el titulo sea un enlace de la url
                        <a href={this.props.url}>{this.props.title}</a>*/}
                    </div>
                    {/*La animación la ponemos para los links de los planets */}
                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className="result-post-url">
                            {this.renderPlanets()}
                        </div>
                    </AnimateHeight>
                </li>
            )
        }
        
    }
}