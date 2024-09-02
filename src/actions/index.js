import { SET_RECENT_POSTS } from "./types";

import axios from "axios";

//función no devuelve un objeto de acción estándar, sino una función.
export function fetchRecentPosts() { 
    //Esta función que se retorna recibe un argumento llamado dispatch, que es una función proporcionada por Redux.
    //Esto es útil para manejar tareas asíncronas, como solicitudes a APIs.
    //Esto es lo que haremos para llamar a los posts desde nuestra barra de busqueda
    return function (dispatch) { 
        axios.get("https://swapi.dev/api/films/")
            .then(response =>{
                //Esto nos permite ver todos los resultados
                console.log("LLamamos a la API", response.data.results);

                //Cuando recibimos los datos
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.results
                })
            })
            .catch(error =>{
                console.log("Error de llamada a la API", error);
            })
        //console.log("Acceso al dispatch de actions/index.js para solicitudes API")
    }
}
//Vamos a traer desde la api los posts filtrados por lo que pongamos en la barra de búsqueda
export function fetchPostsWithQuery(query) { 
    //Esta función que se retorna recibe un argumento llamado dispatch, que es una función proporcionada por Redux.
    //Esto es útil para manejar tareas asíncronas, como solicitudes a APIs.
    //Esto es lo que haremos para llamar a los posts desde nuestra barra de busqueda
    return function (dispatch) { 
        axios.get(`https://swapi.dev/api/films/?search=${query}`)
            .then(response =>{
                //Esto nos permite ver todos los resultados
                console.log(query);
                console.log("LLamamos a la API de resultados filtrados", response.data.results);

                //Cuando recibimos los datos
                /*dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.results
                })*/
            })
            .catch(error =>{
                console.log("Error de llamada a la API", error);
            })
        //console.log("Acceso al dispatch de actions/index.js para solicitudes API")
    }
}
//Esto lo manejamos desde nuestros reductores