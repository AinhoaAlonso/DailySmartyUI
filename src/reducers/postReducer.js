//Importamos nuestra action que va a ser manejada por este reducer

import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from "../actions/types";

//import Results from "../components/results";
//import RecentPosts from "../components/recentPosts";

//necesitamos declarar un estado inicial
const INIT_STATE = {
    resultsPosts: [],
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
            }
        case SET_RESULTS_POSTS:
            const resultsPosts = action.payload;
            return{
                ...state,
                resultsPosts
            }
        default:
            return state;
    }
}