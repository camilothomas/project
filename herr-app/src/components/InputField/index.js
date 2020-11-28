import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const InputFieldDiv = styled.div`
    display: flex;
    justify-content: space-around;
    grid-column: 1/5;
    grid-row:2/3;
`;

const StyledTextField = withStyles({
    root: {
      margin: '1.5em'
    }
    
  })(TextField);

function InputField(props) {
    return (
      <InputFieldDiv>
        <form noValidate autoComplete="off">
            <StyledTextField 
            inputProps={{
                maxLength: 4,
              }}
                id="filled-basic"
                label="enter pin"
                variant="filled"
                type="password" />
        </form>
      </InputFieldDiv>
    );
}

export default InputField;