import * as React from 'react';
import {combineReducers} from 'redux'
import {Provider} from 'react-redux/dist/react-redux.js';

import {Header} from './components/shared/Header';
import {Footer} from './components/shared/Footer';


export class MainApp extends React.Component<{},{}> {
    render() {
        return <div styles={{width:'100%',height:'100%'}}>
            <Header/>
            <div>Components</div>
            <Footer/>
        </div>
    }
}
