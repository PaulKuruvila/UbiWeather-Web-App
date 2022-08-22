import React, {useState} from 'react';
import './Display.css';

const Display = props => {

    return (
        <div className="container">
            <h3>{props.data['name']}</h3>
            <div>{props.data['weather']}</div>
        </div>
    )
}

export default Display
