import React from 'react';
import './Display.css';

function Display({city, dataToDisplay}) {
    return (
        <div className="container">
            <h3>{city}</h3>
            <div>{dataToDisplay}</div>
        </div>
    )
}

export default Display
