import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import update from './counter'
import Reducer = Redux.Reducer;

const rootReducers = combineReducers({
    count:update,
    routing: routerReducer
});

export default rootReducers;