//Importamos nuestra action que va a ser manejada por este reducer

import { SET_RECENT_POSTS } from "../actions/types";
import recentPosts from "../components/recentPosts";

//necesitamos declarar un estado inicial
const INIT_STATE = {
    results: [],
    recentPosts: []
}
//declaración switch para ver si estamos alcanzando esa acción.
export default function(state = INIT_STATE, action){
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            return {
                //aqui el operador de propagacion esta tomando todos los datos de INIT_STATE
                ...state, 
                recentPosts
            };
    
        default:
            return state;
    }
}