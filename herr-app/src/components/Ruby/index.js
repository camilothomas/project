import React from 'react';
import styled from 'styled-components';

const RubyDiv = styled.div`
    background-color: rosybrown;
    margin: 0 1em 0 1em;
    border-radius: 0 1em 0 0;
`;

const RubyHeader = styled.h1`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${props => props.blobColor};
`;

class Ruby extends React.Component {
  render() {
    return <RubyDiv><RubyHeader>{this.props.name}</RubyHeader><h2>Date Me</h2></RubyDiv>;
  }
}

export default Ruby;
