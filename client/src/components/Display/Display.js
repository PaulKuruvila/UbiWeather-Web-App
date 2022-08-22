import React, {useState} from 'react';
import './Display.css';

const Display = props => {

    const [temp_unit, changeUnit] = useState('C');

    function switchUnit(unit){
        if(unit === 'C'){
            changeUnit('F');
        } else if(unit === 'F'){
            changeUnit('C');
        } else {
            console.log("Error. Unexpected unit value received.");
        }
    }

    return (
        <div className="container" style={{display: props.data['dataLoaded'] ? 'block' : 'none'}}>
            <button onClick={() => switchUnit(temp_unit)}>Change Unit (°{temp_unit})</button>
            <h1>{props.data['name']}</h1>
            <p>{props.data['coord']}</p>
            <p>{props.data['weather']}</p>
            <img src={`/weather_icons/${props.data['icon']}.png`} alt="Image not found." />
            <h2>Temp</h2>
            <p>{`Current: ${props.data['temp_current']}°${temp_unit}`}</p>
            <p>{`High ${props.data['temp_high']}°${temp_unit}`}</p>
            <p>{`Low ${props.data['temp_low']}°${temp_unit}`}</p>
        </div>
    )
}

export default Display
