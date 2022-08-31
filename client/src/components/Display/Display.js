import React, {useState} from 'react';
import './Display.scss';

const Display = props => {

    function displayForecast(){

    }

    function switchUnit(){
        let unit_value_current, unit_value_high, unit_value_low;
        if(props.data['temp_unit'] === 'C'){
            unit_value_current = ((props.data['temp_current'] * 9/5) + 32).toFixed(2);
            unit_value_high = ((props.data['temp_high'] * 9/5) + 32).toFixed(2);
            unit_value_low = ((props.data['temp_low'] * 9/5) + 32).toFixed(2); 
            props.changeDataDisplayed({dataLoaded: true, name:props.data['name'], coord:props.data['coord'], weather: props.data['weather'], icon: props.data['icon'], temp_current:unit_value_current, temp_high:unit_value_high, temp_low:unit_value_low, weather_forecast: props.data['weather_forecast'], temp_unit: 'F'});
        } else if(props.data['temp_unit'] === 'F'){
            unit_value_current = ((props.data['temp_current'] - 32) * 5/9).toFixed(2);
            unit_value_high = ((props.data['temp_high'] - 32) * 5/9).toFixed(2);
            unit_value_low = ((props.data['temp_low'] - 32) * 5/9).toFixed(2);
            props.changeDataDisplayed({dataLoaded: true, name:props.data['name'], coord:props.data['coord'], weather: props.data['weather'], icon: props.data['icon'], temp_current:unit_value_current, temp_high:unit_value_high, temp_low:unit_value_low, weather_forecast: props.data['weather_forecast'], temp_unit: 'C'});
        } else {
            console.log("Error. Unexpected unit value received.");
        }
    }

    return (
        <div className="main-container" style={{display: props.data['dataLoaded'] ? 'block' : 'none'}}>
            <div id="top-layer">
                <p id="coord">{props.data['coord']}</p>
                <button onClick={() => switchUnit()}>Change Unit (°{props.data['temp_unit']})</button>
            </div>
            <h1>{props.data['name']}</h1>
            <div className="weather-container-main">
                <img src={`/weather_icons/${props.data['icon']}.png`} alt="Image not found." />
                <p id="description">{props.data['weather']}</p>
            </div>
            <div id="bottom-layer">
                <h2>Temp</h2>
                <p>{`Current: ${props.data['temp_current']}°${props.data['temp_unit']}`}</p>
                <p>{`High: ${props.data['temp_high']}°${props.data['temp_unit']}`}</p>
                <p>{`Low: ${props.data['temp_low']}°${props.data['temp_unit']}`}</p>
            </div>
            <div id="weekly_forecast" style={{display: props.data['dataLoaded'] ? 'block' : 'none'}}>
                <div className="weather-container-mini">
                    {/* <p className="day"></p> */}
                    {/* <img src={`/weather_icons/${props.data['weather_forecast'][0]['weather'][0]['icon']}.png`} alt="Image not found." /> */}
                    {/* <p className="mini-description">{props.data['weather_forecast']}</p> */}
                    {/* <ul>{props.data['weather_forecast']['daily'][0].map((weekday) => (
                        <li>{weekday}</li>
                    ))}
                    </ul> */}
                    {/* <img src={`weather_icons/${props.data['weather_forecast'][0][0]}.png`} alt="Image not found." /> */}
                    <p className="mini-descr">{JSON.stringify(props.data['weather_forecast'][0])}</p>
                </div>
            </div>
        </div>
    )
}

export default Display
