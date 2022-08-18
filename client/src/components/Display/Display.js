import React, {useState} from 'react';
import './Display.css';

const Display = props => {

    return (
        <div className="container">
            <h3>{props.city}</h3>
            <div>{props.dataToDisplay}</div>
        </div>
    )
}

export default Display
