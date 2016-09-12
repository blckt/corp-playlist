import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import * as React from 'react';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import reducers from '../reducers'

import {Wrapper} from './Wrapper'
import {App} from './App';
import Counter from '../components/test';
import {Auth} from '../components/auth/Auth';
import authHandlers from '../utils/auth';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
);
const store = createStore(
    reducers,
    DevTools.instrument()
);
const history = syncHistoryWithStore(browserHistory, store)
console.log(store);

class Root extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <Route path="/" component={Wrapper} onEnter={authHandlers.checkAuth}>
                            <IndexRoute component={App} />
                            <Route path="/counter" component={Counter}/>
                            <Route  path="/auth" component={Auth}/>
                        </Route>
                    </Router>
                    <DevTools />
                </div>
            </Provider>
        )
    }
}
export default Root;
