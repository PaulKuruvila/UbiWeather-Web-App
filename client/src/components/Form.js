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
                props.changeData({dataLoaded: true,name:jsonData['city'], coord:`(${jsonData['coord']['lat']}°, ${jsonData['coord']['lon']}°)`, weather: jsonData['weather'][0]['description'], icon: jsonData['weather'][0]['icon'], temp_current: `${jsonData['temp_current']}°C`, temp_high: `${jsonData['temp_high']}°C`, temp_low: `${jsonData['temp_low']}°C`});
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
        // <div>
            <form className="Search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input onChange={changeHandler} value={cityName} className="SearchBar" type="text" placeholder="Please enter a city name." />
                <button onClick={searchHandler} className="SearchButton" type="submit">Search</button>
            </form>
            //{/* <div>{`${cityData['name']}, ${cityData['coord']}, ${cityData['weather']}, ${cityData['icon']}, ${cityData['temp_current']}, ${cityData['temp_high']}, ${cityData['temp_low']}`}</div>  */}
        //{/* </div> */}
    )
}

export default Form
