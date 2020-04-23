import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    
`;


const HeaderDiv = styled.div`
    color: white;
    display: flex;
    justify-content: space-around;
    background-color: #003a6c;
    grid-column: 1/5;
    grid-row:1/2;
`;

const Header = props => (
    <HeaderDiv>
        <Title>Millions of Monkeys</Title>
    </HeaderDiv>
);

export default Header;
