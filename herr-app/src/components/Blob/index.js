import React from 'react';
import styled from 'styled-components';

const BlobDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${props => props.blobColor};
`;

const Blob = props => (
    <BlobDiv blobColor={props.blobColor} onClick={props.onClick}/>
);

export default Blob;
