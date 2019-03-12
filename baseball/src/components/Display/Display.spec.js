import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should show title, balls, strikes', () => {
        const { getByTestId, getByText } = render(<Display display={{ balls: 0, strikes: 0 }} />);

        const title = getByTestId('title');
        const balls = getByText(/balls/i);
        const strikes = getByText(/strikes/i);
        const propsBalls = getByTestId('balls');
        const propsStrikes = getByTestId('strikes');

        expect(title).toHaveTextContent(/display count/i);
        expect(balls).toHaveTextContent(/balls:/i);
        expect(strikes).toHaveTextContent(/strikes:/i);
        expect(propsBalls).toHaveTextContent('0');
        expect(propsStrikes).toHaveTextContent('0');
    })
})
