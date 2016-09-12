import {createStore, compose} from 'redux';
import {reduxReactRouter, routerStateReducer, ReduxRouter} from 'redux-router';
import {createHashHistory} from 'history';
import rootReducers from '../reducers/index';

export default function configureStore(initialState:any) {
    let finalCreateStore:any = compose(reduxReactRouter(createHashHistory), f=>f)(createStore);
    const store = finalCreateStore(rootReducers, initialState);
   /* if (module.hot) {
        module.hot.accept('../reducers', ()=> {
            const nextReducer = require('../reducers');
            store.replaceReducers(nextReducer)
        });
    }*/
    return store;
}