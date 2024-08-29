import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";

class SearchBar extends Component{
     //Este método maneja la acción de envío del formulario. Recibe un objeto que contiene el campo query, y simplemente lo registra en la consola.
    handleFormSubmit = function ({query}) {
        console.log("Envio del formulario", query);
    }
    //Este método genera un campo de entrada (input) en el formulario. Usa el objeto field, que viene de Redux Form, y distribuye (...) todas las propiedades de field.input dentro del componente input. Esto incluye manejar el estado y los eventos del campo de entrada.
    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }
      
    render(){
        //Este método proviene de las props que reduxForm inyecta en el componente. Se encarga de manejar el envío del formulario.
        const { handleSubmit } = this.props;

        return(
            //Aquí se define el formulario, con una clase search-bar y un evento onSubmit que ejecuta handleSubmit, pasándole handleFormSubmit como argumento. El método bind(this) asegura que this dentro de handleFormSubmit se refiera al componente SearchBar.
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {/*Este componente viene de Redux Form. Se utiliza para conectar un campo de formulario con Redux. El name="query" indica que este campo será parte del objeto de datos del formulario bajo la clave query. component={this.renderInput} especifica que renderInput será el método usado para renderizar el campo.*/}
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}
//Preparamos un reduxForm, el componente SearchBar es conectado con Redux Form usando la función reduxForm. El objeto pasado como argumento { form: 'searchBar' } especifica que este formulario se identificará con el nombre searchBar dentro del estado de Redux.
SearchBar = reduxForm({
    //Le damos opciones de configuración
    form: 'searchBar'
})(SearchBar);//Se pasa el componente para que podamos utilizar esto de forma efectiva

export default SearchBar;