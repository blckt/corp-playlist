import * as React from 'react';

const styles = {
    minHeight:'65px',
};

export class Footer extends React.Component<{},{}> {
    render() {
        return <div style={styles} className="footer">
            This is footer
        </div>
    }
}