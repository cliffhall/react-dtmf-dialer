import React, {Component} from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";

const StyledBootstrapButton = styled(Button)`
    &&& {
        width: 100px;
        height: 100px;
        font-size: 36px;
        outline: none;
    }  
`;

export class StyledKeypadButton extends Component {
    render() {
        const {...props} = this.props;
        return <StyledBootstrapButton {...props}/>
    }
}
