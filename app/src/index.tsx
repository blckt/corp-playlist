
import * as React from 'react'
import * as ReactDOM from 'react-dom'


import Root from './containers/root'


class Hello extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return <h1>Hi</h1>
    }
}
var el=document.createElement("div");
document.body.appendChild(el);
ReactDOM.render(<Root/>,el)