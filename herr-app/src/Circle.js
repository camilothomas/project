import React from 'react';
import './Circle.css';

function Circle(props) {
    return (<div className="circle" onClick={props.onClick}></div>);
}
export default Circle;