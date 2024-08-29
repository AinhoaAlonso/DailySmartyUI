import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import results from '../reducers/postReducer';

const rootReducer = combineReducers({
  //Esto lo quitamos porque no nos deja escribir en el searchbar
  //state: (state = {}) => state
  form,
  results
});

export default rootReducer;