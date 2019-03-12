import React from 'react';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

class Container extends React.Component {
    constructor() {
        super()

        this.state = {
            display: {
                strikes: 0,
                balls: 0,
                fouls: 0,
                hit: false
            }
        }
    }

    // handleClick = e => {
    //     e.preventDefault();

    //     this.setState({
    //         ...display,
    //     })
    // }

    render() {
        return (
            <div>
                <Display display={this.state.display} />
                <Dashboard />
            </div>
        )
    }
}

export default Container;