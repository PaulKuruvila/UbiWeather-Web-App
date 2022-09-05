import React, {useState} from 'react';
import './Navbar/Navbar.css';

const Form = props => {

    const [cityName, setCity] = useState('');

    const changeHandler = (e) => {
        setCity(e.target.value);
    }

    const searchHandler = async (e) => {
        e.preventDefault();
        const city = cityName;
        const cityRequested = {city};
        console.log(`Searching for ${city}...`);
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cityRequested)
        };

        const response = await fetch('/search', options);
        try {
            const jsonData = await response.json();
            if (response.status === 200) {
                // console.log("Data fetched:");
                // console.log(jsonData);
                props.changeData({dataLoaded: true, name:jsonData['city'], coord:`(${jsonData['coord']['lat']}°, ${jsonData['coord']['lon']}°)`, weather: jsonData['weather'][0]['description'], icon: jsonData['weather'][0]['icon'], temp_current: jsonData['temp_current'], temp_high: jsonData['temp_high'], temp_low: jsonData['temp_low'], weather_forecast_icon: [jsonData['forecast_data']['daily'][0]['weather'][0]['icon'], jsonData['forecast_data']['daily'][1]['weather'][0]['icon'], jsonData['forecast_data']['daily'][2]['weather'][0]['icon'], jsonData['forecast_data']['daily'][3]['weather'][0]['icon'], jsonData['forecast_data']['daily'][4]['weather'][0]['icon'], jsonData['forecast_data']['daily'][5]['weather'][0]['icon'], jsonData['forecast_data']['daily'][6]['weather'][0]['icon'], jsonData['forecast_data']['daily'][7]['weather'][0]['icon']], 
                    weather_forecast_desc: [jsonData['forecast_data']['daily'][0]['weather'][0]['description'], jsonData['forecast_data']['daily'][1]['weather'][0]['description'], jsonData['forecast_data']['daily'][2]['weather'][0]['description'], jsonData['forecast_data']['daily'][3]['weather'][0]['description'], jsonData['forecast_data']['daily'][4]['weather'][0]['description'], jsonData['forecast_data']['daily'][5]['weather'][0]['description'], jsonData['forecast_data']['daily'][6]['weather'][0]['description'], jsonData['forecast_data']['daily'][7]['weather'][0]['description']], 
                    weather_forecast_temp_max: [jsonData['forecast_data']['daily'][0]['temp']['max'], jsonData['forecast_data']['daily'][1]['temp']['max'], jsonData['forecast_data']['daily'][2]['temp']['max'], jsonData['forecast_data']['daily'][3]['temp']['max'], jsonData['forecast_data']['daily'][4]['temp']['max'], jsonData['forecast_data']['daily'][5]['temp']['max'], jsonData['forecast_data']['daily'][6]['temp']['max'], jsonData['forecast_data']['daily'][7]['temp']['max']], 
                    weather_forecast_temp_min: [jsonData['forecast_data']['daily'][0]['temp']['min'], jsonData['forecast_data']['daily'][1]['temp']['min'], jsonData['forecast_data']['daily'][2]['temp']['min'], jsonData['forecast_data']['daily'][3]['temp']['min'], jsonData['forecast_data']['daily'][4]['temp']['min'], jsonData['forecast_data']['daily'][5]['temp']['min'], jsonData['forecast_data']['daily'][6]['temp']['min'], jsonData['forecast_data']['daily'][7]['temp']['min']], temp_unit: 'C'});
                console.log("Weather forecast fetched:");
                console.log(jsonData['forecast_data']);
            } else {
                console.log(`Error retrieving data for city: ${response.status}`);
            }
        } catch (error) {
            let error_msg = "Error occurred when trying to fetch data for city specified:";
            if (response.status === 404) {
                console.log(error_msg, "City not found. Verify that the city requested is valid.");
                alert(`${error_msg} \n-----------------------\nCity not found. Verify that the city requested is valid.`);
            } else if (response.status === 400) {
                console.log(error_msg, "Bad request.");
                alert(`${error_msg} \n-----------------------\nBad request.`);
            } else {
                console.log(error_msg, "Unexpected error.");
                alert(`${error_msg} \n-----------------------\nUnexpected error.`);
            }
        }

        setCity("");
    }

    return (
        <form className="Search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input onChange={changeHandler} value={cityName} className="SearchBar" type="text" placeholder="Please enter a city name. ex: Stafford, US" />
            <button onClick={searchHandler} className="SearchButton" type="submit">Search</button>
        </form>
    )
}

export default Form
