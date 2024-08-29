import { SET_RECENT_POSTS } from "./types";


import axios from "axios";
//función no devuelve un objeto de acción estándar, sino una función.
export function fetchRecentPosts() { 
    //Esta función que se retorna recibe un argumento llamado dispatch, que es una función proporcionada por Redux.
    //Esto es útil para manejar tareas asíncronas, como solicitudes a APIs.
    //Esto es lo que haremos para llamar a los posts desde nuestra barra de busqueda
    return function (dispach) { 
        axios.get("https://swapi.dev/api/films/")
            .then(response =>{
                //Esto nos permite ver todos los resultados
                console.log("LLamamos a la API", response.data.posts);

                //Cuando recibimos los datos
                dispach({
                    type: SET_RECENT_POSTS,
                    payload: response.data.results
                })
            })
            .catch(error =>{
                console.log("Error de llamada a la API", error);
            })
        //console.log("Acceso al dispach de actions/index.js para solicitudes API")
    }
}
//Esto lo manejamos desde nuestros reductores