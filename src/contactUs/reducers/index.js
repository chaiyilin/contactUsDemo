import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import preloadedState from './preloadedState';

const reducers = {
    form: formReducer
}
const reducer = combineReducers(reducers)
export default reducer
