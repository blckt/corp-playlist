import * as React from 'react';
import {Link} from 'react-router'
const styles = {
    minHeight:'65px',
};

export class Header extends React.Component<any,any>  {
    render() {
        return <div style={styles} className="header">
            <Link to="/counter">Counter</Link>
            This is header
        </div>
    }
}