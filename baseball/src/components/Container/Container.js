import React from 'react';
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

class Container extends React.Component {
    constructor() {
        super()

        this.state = {
            strikes: 0,
            balls: 0,
            fouls: 0,
            hit: false
        }
    }

    handleStrikeClick = (e) => {
        e.preventDefault();
        let strikes = this.state.strikes;
        strikes++;
        this.setState({
            ...this.state,
            strikes: strikes
        })
    }

    handleBallClick = (e) => {
        e.preventDefault();
        let balls = this.state.balls;
        balls++;
        this.setState({
            ...this.state,
            balls: balls
        })
    }

    render() {
        return (
            <div>
                <Display
                    display={this.state}
                />
                <Dashboard
                    handleStrikeClick={this.handleStrikeClick}
                    handleBallClick={this.handleBallClick}
                />
            </div>
        )
    }
}

export default Container;