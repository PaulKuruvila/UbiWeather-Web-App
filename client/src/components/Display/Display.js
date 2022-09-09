import React, {useState} from 'react';
import './Display.scss';

const Display = props => {

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    // find index for weekday to display for weekly forecast
    function getIndex(pos){ 
        let index = props.data['weekday'];
        if(index+pos > 6){
            index = (index+pos)-7;
        } else {
            index+=pos;
        }
        return index;
    }

    function switchUnit(){
        let unit_value_current, unit_value_high, unit_value_low;
        if(props.data['temp_unit'] === 'C'){
            unit_value_current = ((props.data['temp_current'] * 9/5) + 32).toFixed(2);
            unit_value_high = ((props.data['temp_high'] * 9/5) + 32).toFixed(2);
            unit_value_low = ((props.data['temp_low'] * 9/5) + 32).toFixed(2); 
            props.changeDataDisplayed({dataLoaded: true, name:props.data['name'], coord:props.data['coord'], 
                weather: props.data['weather'], icon: props.data['icon'], temp_current:unit_value_current, 
                temp_high:unit_value_high, temp_low:unit_value_low, weather_forecast_icon: props.data['weather_forecast_icon'], 
                weather_forecast_desc: props.data['weather_forecast_desc'], weather_forecast_temp_max: props.data['weather_forecast_temp_max'], 
                weather_forecast_temp_min: props.data['weather_forecast_temp_min'], weekday: props.data['weekday'], temp_unit: 'F'});
        } else if(props.data['temp_unit'] === 'F'){
            unit_value_current = ((props.data['temp_current'] - 32) * 5/9).toFixed(2);
            unit_value_high = ((props.data['temp_high'] - 32) * 5/9).toFixed(2);
            unit_value_low = ((props.data['temp_low'] - 32) * 5/9).toFixed(2);
            props.changeDataDisplayed({dataLoaded: true, name:props.data['name'], coord:props.data['coord'], 
                weather: props.data['weather'], icon: props.data['icon'], temp_current:unit_value_current, 
                temp_high:unit_value_high, temp_low:unit_value_low, weather_forecast_icon: props.data['weather_forecast_icon'], 
                weather_forecast_desc: props.data['weather_forecast_desc'], weather_forecast_temp_max: props.data['weather_forecast_temp_max'], 
                weather_forecast_temp_min: props.data['weather_forecast_temp_min'], weekday: props.data['weekday'], temp_unit: 'C'});
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
                <p className="description">{props.data['weather']}</p>
            </div>
            <div id="bottom-layer">
                <h2>Temp</h2>
                <p>{`Current: ${props.data['temp_current']}°${props.data['temp_unit']}`}</p>
                <p>{`High: ${props.data['temp_high']}°${props.data['temp_unit']}`}</p>
                <p>{`Low: ${props.data['temp_low']}°${props.data['temp_unit']}`}</p>
            </div>
            <h2 style={{'border-top': '1px solid #6571729b', 'padding': '1em 0 1em 0'}}>Weekly Forecast</h2>
            <div id="weekly_forecast" style={{display: props.data['dataLoaded'] ? 'flex' : 'none'}}>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(1)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][0]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H: </strong>{`${props.data['weather_forecast_temp_max'][0]}°${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][0]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][0]}</p>
                </div>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(2)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][1]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H: </strong>{`${props.data['weather_forecast_temp_max'][1]}°${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][1]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][1]}</p>
                </div>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(3)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][2]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H: </strong>{`${props.data['weather_forecast_temp_max'][2]}°${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][2]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][2]}</p>
                </div>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(4)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][3]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H: </strong>{`${props.data['weather_forecast_temp_max'][3]}°${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][3]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][3]}</p>
                </div>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(5)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][4]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H: </strong>{`${props.data['weather_forecast_temp_max'][4]} °${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][4]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][4]}</p>
                </div>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(6)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][5]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H: </strong>{`${props.data['weather_forecast_temp_max'][5]}°${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][5]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][5]}</p>
                </div>
                <div className="weather-container-mini">
                    <p className="day">{weekdays[getIndex(7)]}</p>
                    <img src={`weather_icons/${props.data['weather_forecast_icon'][6]}.png`} alt="Image not found." />
                    <div style={{'position':'relative', 'top':'-20px'}}>
                        <p><strong>H:</strong>{`${props.data['weather_forecast_temp_max'][6]}°${props.data['temp_unit']}`}</p>
                        <p style={{'margin-top':'5px'}}><strong>L: </strong>{`${props.data['weather_forecast_temp_min'][6]}°${props.data['temp_unit']}`}</p>
                    </div>
                    <p className="description">{props.data['weather_forecast_desc'][6]}</p>
                </div>
            </div>
        </div>
    )
}

export default Display
