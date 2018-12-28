import React, { Component } from 'react';
import { connect } from 'react-redux';

import {KEYPAD} from '../constants/dtmf';
import KeypadKey from './KeypadKey';
import {StyledKeypad} from '../styles/StyledKeypad';
import {StyledKeypadRow} from '../styles/StyledKeypadRow';

import {playDTMFPair} from '../store/audio/actions';

// Main App component
class App extends Component {

    render() {

        const {playTones} = this.props;

        return <StyledKeypad>

            {
                KEYPAD.map( (row, rindex) =>
                <StyledKeypadRow key={rindex}>
                    {row.map( key => <KeypadKey
                        key={key[0]}
                        label={key[0]}
                        tones={key[1]}
                        handleClick={playTones}/>)}
                </StyledKeypadRow>)
            }

        </StyledKeypad>;
    }
}

// Map dispatch function into props
const mapDispatchToProps = (dispatch) => ({
    playTones: tones => dispatch(playDTMFPair(tones))
});

export default connect(null, mapDispatchToProps)(App);
