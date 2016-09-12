import * as React from 'react';
import {connect} from 'react-redux';
import {decrease, increase} from '../actions/count';

class Counter extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return <div>
            Some state changes:
            {this.props.number}
            <button onClick={() => this.props.increase(1)}>Increase</button>
            <button onClick={() => this.props.decrease(1)}>Decrease</button>
        </div>
    }
}


const mapDispatchToProps = (dispatch:Function) => {
    return {
        increase: (n:number) => {
            dispatch(increase((n)))
        },
        decrease: (n:number)=> {
            dispatch(decrease(n))
        }
    }
};
export default connect((state:any)=> {
    return {number: state.count.number}
}, mapDispatchToProps)(Counter);