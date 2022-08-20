import React, {useState} from 'react';
import './Navbar/Navbar.css';

const Form = () => {

    const [cityName, setCity] = useState();

    // try passing data here as parameters to function in parent component & have useState hook to store/update the values
    const [cityData, setCityData] = useState({name:'City',coord:'Coordinates',weather:'Weather',icon:'Icon',temp_current:'Current',temp_high:'High',temp_low:'Low'});

    const changeHandler = (e) => {
        // console.log(`Search bar: ${e.target.value}`);
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
                console.log("Data fetched:");
                console.log(jsonData);
                setCityData({name:jsonData['city'], coord:`(${jsonData['coord']['lat']}°, ${jsonData['coord']['lon']}°)`, weather: jsonData['weather'][0]['description'], icon: jsonData['weather'][0]['icon'], temp_current: `${jsonData['temp_current']}°C`, temp_high: `${jsonData['temp_high']}°C`, temp_low: `${jsonData['temp_low']}°C`});
                alert(`City: ${jsonData['city']}\nCoordinates: (${jsonData['coord']['lat']}°, ${jsonData['coord']['lon']}°)\nWeather: ${jsonData['weather'][0]['description']}\nCurrent temp: ${jsonData['temp_current']}°C\nHigh: ${jsonData['temp_high']}°C\nLow: ${jsonData['temp_low']}°C`);
            } else {
                console.log(`Error retrieving data for city: ${response.status}`);
            }
        } catch (error) {
            let error_msg = "Error occurred when trying to fetch data for city specified:";
            if (response.status === 404) {
                console.log(error_msg, "City not found. Verify that the city requested is valid.");
            } else {
                console.log(error_msg, "Unexpected error.");
            }
        }

        setCity("");
    }

    return (
        <div>
            <form className="Search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input onChange={changeHandler} value={cityName} className="SearchBar" type="text" placeholder="Please enter a city name." />
                <button onClick={searchHandler} className="SearchButton" type="submit">Search</button>
            </form>
            <div>{`${cityData['name']}, ${cityData['coord']}, ${cityData['weather']}, ${cityData['icon']}, ${cityData['temp_current']}, ${cityData['temp_high']}, ${cityData['temp_low']}`}</div> 
        </div>
    )
}

export default Form
