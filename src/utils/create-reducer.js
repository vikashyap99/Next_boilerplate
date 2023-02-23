import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import globalReducer from '../reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    form: formReducer,
    global: globalReducer,
    ...asyncReducers,
  });
}
