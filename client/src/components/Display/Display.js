import React, {useState} from 'react';
import './Display.css';

const Display = props => {

    const [temp_unit, changeUnit] = useState('C');

    function switchUnit(){
        let unit_value_current, unit_value_high, unit_value_low;
        if(temp_unit === 'C'){
            unit_value_current = ((props.data['temp_current'] * 9/5) + 32).toFixed(2);
            unit_value_high = ((props.data['temp_high'] * 9/5) + 32).toFixed(2);
            unit_value_low = ((props.data['temp_low'] * 9/5) + 32).toFixed(2); 
            changeUnit('F');
            props.changeDataDisplayed({dataLoaded: true, name:props.data['name'], coord:props.data['coord'], weather: props.data['weather'], icon: props.data['icon'], temp_current:unit_value_current, temp_high:unit_value_high, temp_low:unit_value_low});
        } else if(temp_unit === 'F'){
            unit_value_current = ((props.data['temp_current'] - 32) * 5/9).toFixed(2);
            unit_value_high = ((props.data['temp_high'] - 32) * 5/9).toFixed(2);
            unit_value_low = ((props.data['temp_low'] - 32) * 5/9).toFixed(2);
            changeUnit('C');
            props.changeDataDisplayed({dataLoaded: true, name:props.data['name'], coord:props.data['coord'], weather: props.data['weather'], icon: props.data['icon'], temp_current:unit_value_current, temp_high:unit_value_high, temp_low:unit_value_low});
        } else {
            console.log("Error. Unexpected unit value received.");
        }
    }

    return (
        <div className="container" style={{display: props.data['dataLoaded'] ? 'block' : 'none'}}>
            <button onClick={() => switchUnit()}>Change Unit (°{temp_unit})</button>
            <h1>{props.data['name']}</h1>
            <p>{props.data['coord']}</p>
            <p>{props.data['weather']}</p>
            <img src={`/weather_icons/${props.data['icon']}.png`} alt="Image not found." />
            <h2>Temp</h2>
            <p>{`Current: ${props.data['temp_current']}°${temp_unit}`}</p>
            <p>{`High: ${props.data['temp_high']}°${temp_unit}`}</p>
            <p>{`Low: ${props.data['temp_low']}°${temp_unit}`}</p>
        </div>
    )
}

export default Display
