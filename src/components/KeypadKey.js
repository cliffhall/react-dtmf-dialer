import React from 'react';

import {StyledKeypadButton} from '../styles/StyledKeypadButton';

export default function KeypadKey(props) {

    const {label, tones, handleClick} = props;

    return <StyledKeypadButton onClick={() => handleClick(tones)}>{label}</StyledKeypadButton>

}