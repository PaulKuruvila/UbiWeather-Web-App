import React, {useState} from 'react';
import './Display.css';

const Display = props => {

    return (
        <div className="container" style={{display: props.data['dataLoaded'] ? 'block' : 'none'}}>
            <h1>{props.data['name']}</h1>
            <p>{props.data['coord']}</p>
            <p>{props.data['weather']}</p>
            <img src={`/weather_icons/${props.data['icon']}.png`} alt="Image not found." />
            <h2>Temp</h2>
            <p>{`Current: ${props.data['temp_current']}`}</p>
            <p>{`High ${props.data['temp_high']}`}</p>
            <p>{`Low ${props.data['temp_low']}`}</p>
        </div>
    )
}

export default Display
