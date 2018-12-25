import React, { Component } from 'react';

import {KEYPAD} from '../constants/dtmf';
import KeypadKey from './KeypadKey';
import {StyledKeypad} from '../styles/StyledKeypad';
import {StyledKeypadRow} from '../styles/StyledKeypadRow';

// Main App component
class App extends Component {

    renderKeyPad = () => {

        return KEYPAD.map( (row, rindex) =>
            <StyledKeypadRow key={rindex}>
                {row.map( key => <KeypadKey
                            key={key[0]}
                            label={key[0]}
                            tones={key[1]}
                            handleClick={tones => console.log(tones)}/>)}
            </StyledKeypadRow>
        );

    };

    // Render the component
    render() {
        return <StyledKeypad>

            {this.renderKeyPad()}

        </StyledKeypad>;
    }
}

export default App;