import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  //Esto lo quitamos porque no nos deja escribir en el searchbar
  //state: (state = {}) => state
  form
});

export default rootReducer;