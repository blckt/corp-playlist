import * as React from 'react';

import {Header} from '../components/shared/Header';
import {Footer} from '../components/shared/Footer';

export class Wrapper extends React.Component<any,any> {
    constructor(props:any){
        super(props);
    }
    static propTypes:any = {
        children: React.PropTypes.node
    };

    render() {
        return <div style={{width:'100%',height:'100%'}}>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
    }
}
