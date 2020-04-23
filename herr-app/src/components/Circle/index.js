import React from 'react';
import styled from 'styled-components';

const CircleDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgb(60, 255, 0);
    border-radius: 50%;
`;


const Circle = props => (
    <CircleDiv onClick={props.onClick}/>
);

export default Circle;
