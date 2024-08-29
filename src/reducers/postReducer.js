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
            
            return [...state, recentPosts: action.payload ];
    
        default:
            return state;
    }
}