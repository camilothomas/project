import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

class Ruby extends React.Component {
  render() {
    return (
      <StyledCard raised >
        {this.props.name}
        <h2>
          Pick Me
        </h2>
      </StyledCard>
    );
  }
}

const StyledCard = withStyles({
  root: {
    background: '#FFE0B2',
    borderRadius: 3,
    border: 0,
    padding: '10px 30px',
    margin: '1.5em'
  }
})(Card);

export default Ruby;

// export default Ruby;