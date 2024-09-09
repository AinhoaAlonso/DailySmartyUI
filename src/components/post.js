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
    
    //Funcion para conseguir lo que queremos mostrar de los links, le pasamos el argumento del link
    //Los links son siempre igual: "https://swapi.dev/api/planets/1/", lo que queremos es que nos muestre solo Planets 1
    getNameForPlanetsLink(str){
        //variable que nos devuelve la ultima posición de planets, "n" toma valor 22
        let n = str.lastIndexOf("planets");
        //variable que nos devuelve una cadena desde la posicion de "n" y el ultimo valor de la cadena, que es la longitud total del string
        let res1 = str.substring(n, str.length); // Esto da como resultado: planets/1/
        let str2 = res1; //asignamos planets/1/ a "str2"
        let n2 = str2.lastIndexOf("/"); //variable que nos devuelve la posicion de la ultima "/", toma valor 9
        //nos devuelve una cadena des del posicion 9 hasta el final del string, que es la longitud total del string
        let res2 = str2.substring(n2, str2.length);  //Da como resultado "/"
       
        //Condición para quitar las barras, si 9 + 1 es igual a la longitud total de la cadena (se va a cumplir)
        if((n2 + 1 ) === str2.length){
            const str3 = str2.slice(0, n2);//nos devuelve el corte desde la posicion 0 a la "n2" que era 9: planets/1 sin la barra del final
            const num = str3.lastIndexOf("/");//Volvemos a buscar la ultima posicion de "/" del string "str3" (planets/1), nos da como valor 7
            const planet = str3.substring (0, num)//Nos devuelve desde la posicion 0 hasta la variable numnos da como resultado "planets"
            const res3 = str3.substring (num + 1, str3.length); //nos devuelve el string desde 7+1 hasta la longitud total del string, en este caso "1"
            //Concatenamos la variable planet con espacio en medio y la variable res3: planets 1
            const link = planet.concat(" ", res3);
            //devuelve el string del link la primera letra con mayúscula y el resto en minúscula
            return link[0].toUpperCase() + link.slice(1);
        }
        
    }
    //Igual que el ejemplo de arriba, vamos a crear como si tuvieramos un array para buscar los planetas en la pagina de resultados
    renderPlanets(){
        let planets = this.props.planets.map((planet, index) => {
            return (
                <div className="link-planets" key={index}>
                    <div className="link-planets-box">
                    </div>
                    <div className="link-planets-link">
                        {/*Le pasamos la función para poner el link bonito y como argumento en este caso el planet en el que estamos */}
                        <a href={planet}>{this.getNameForPlanetsLink(planet)}</a>
                    </div>
                </div>
            )
        })
        //condicion de que si no hay ningun link de planetas muestre este mensaje
        if(planets === 0){
            return <div className="no-content">No Planets Links</div>
        }
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
                <li className="result-post"
                onMouseEnter={() => this.setState({height: 100})}
                onMouseLeave={() => this.setState({height: 0})}
                >
                    <div className="result-post-director">
                        {this.props.director}
                    </div>
                    {/*Aquí lo que vamos a hacer es que cuando pongas el raton encima del titulo abre una animacion de desplazamiento hacia abajo con los links de los planets y luego quitas el raton la quita */}
                    {/*Le amplia la altura a 100 y luego la baja a cero */}
                    <div className="result-post-title">
                        <a href= {this.props.url}>
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