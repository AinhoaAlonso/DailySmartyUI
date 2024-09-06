import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";

//Desde este componte vamos a hacer que cuando se de enter en la barra de búsqueda va a resultados, para ello necesitamos el enrutador
//componente de orden superior HOC, inyecta propiedades relacionadas con la navegación (history, location y match)
import {withRouter} from "react-router-dom";

class SearchBar extends Component {
    
     //Este método maneja la acción de envío del formulario. Recibe un objeto que contiene el campo query, y simplemente lo registra en la consola, bueno ahora lo manda a results. Importante poner ({}), para no renderizar el objeto directamente
    handleFormSubmit = function ({query}) {
        this.props.onSubmit(query);
    }

    //Este método genera un campo de entrada (input) en el formulario. Usa el objeto field, que viene de Redux Form, y distribuye (...) todas las propiedades de field.input dentro del componente input. Esto incluye manejar el estado y los eventos del campo de entrada.
    //Añadimos aqui el icono f002 y colocamos &#x delante
    renderInput(field) {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />
        
    }
      
    render(){
        //Este método proviene de las props que reduxForm inyecta en el componente. Se encarga de manejar el envío del formulario.
        const { handleSubmit } = this.props;

        return(
            //Aquí se define el formulario, con una clase search-bar y un evento onSubmit que ejecuta handleSubmit, pasándole handleFormSubmit como argumento. El método bind(this) asegura que this dentro de handleFormSubmit se refiera al componente SearchBar.
            //especificaremos una página para nuestra barra de búsqueda, como es JS lo hacemos entre {}, lo que hace esto es que toma de home y results de la barra de busqueda y a la class le añade la page, si es home: search-bar-home y si es results: search-bar-results
            <form className={`search-bar search-bar-${this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {/*Este componente viene de Redux Form. Se utiliza para conectar un campo de formulario con Redux. El name="query" indica que este campo será parte del objeto de datos del formulario bajo la clave query. component={this.renderInput} especifica que renderInput será el método usado para renderizar el campo.*/}
                <div className="search-bar-wrapper">
                    <Field name="query" component={this.renderInput} />
                    <p>Press return to search</p>
                </div>
            </form>
        )
    }
}
//Preparamos un reduxForm, el componente SearchBar es conectado con Redux Form usando la función reduxForm. El objeto pasado como argumento { form: 'searchBar' } especifica que este formulario se identificará con el nombre searchBar dentro del estado de Redux.
SearchBar = reduxForm({
    //Le damos opciones de configuración
    form: 'searchBar'
})(SearchBar);//Se pasa el componente para que podamos utilizar esto de forma efectiva

//Le damos a searchbar capacidades relacionadas con la navegación o enrutamiento.
SearchBar = withRouter(SearchBar);

export default SearchBar;