import React from 'react';
import './Display.css';

function Display({city}) {
    return (
        <div className="container">
            <h3>{city}</h3>
            <p>Display Weather Data Here</p>
        </div>
    )
}

export default Display
