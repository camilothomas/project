import React from 'react';
import './GoldenRectangle.css';

function GoldenRectangle(props) {
    return (<div className="box" onClick={props.onClick}></div>);
}
export default GoldenRectangle;