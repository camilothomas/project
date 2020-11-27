import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    
`;

const InputFieldDiv = styled.div`
    display: flex;
    justify-content: space-around;
    grid-column: 1/5;
    grid-row:2/3;
    padding: 1em;
`;
function InputField(props) {

    return (
        <InputFieldDiv>
            <Input id="myInput" maxLength="4" type="text" />
        </InputFieldDiv>
    );
    
}


export default InputField;