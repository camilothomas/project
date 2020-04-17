import React from 'react';
import styled from 'styled-components';

const RectangleDiv = styled.div`
    width: 500px;
    background-color: goldenrod;
    height: 300px;    
`;

const GoldenRectangle = props => (
    <RectangleDiv onClick={props.onClick}/>
);

export default GoldenRectangle;
