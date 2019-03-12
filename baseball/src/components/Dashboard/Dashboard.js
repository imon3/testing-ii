import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)
    }


    render() {
        return (
            <div>
                <button onClick={(e) => this.props.handleStrikeClick(e)}>STRIKE</button>
                <button onClick={(e) => this.props.handleBallClick(e)}>BALL</button>
                <button>FOUL</button>
                <button>HIT</button>
            </div>
        )
    }
}

export default Dashboard;