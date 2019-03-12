import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                <div data-testid='title'>DISPLAY COUNT</div>
                <div>
                    <p>BALLS: </p>
                    <p data-testid='balls'>{this.props.display.balls}</p>
                </div>

                <div>
                    <p>STRIKES: </p>
                    <p data-testid='strikes'>{this.props.display.strikes}</p>
                </div>

            </div>

        )
    }
}

export default Display;