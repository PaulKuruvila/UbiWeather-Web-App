import React, {useState} from 'react';
import Display from './Display/Display';
import './Navbar/Navbar.css';

const Form = () => {

    const [cityName, setCity] = useState();

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
            } else {
                console.log(`Error retrieving data for city: ${response.status}`);
            }
        } catch (error) {
            let error_msg = "Error occurred when trying to fetch data for city specified:";
            if (response.status === 404) {
                console.log(error_msg, "City not found. Verify that the city requested is valid.")
            } else {
                console.log(error_msg, "Unexpected error.");
            }
        }

        setCity("");
    }

    return (
        <form className="Search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input onChange={changeHandler} value={cityName} className="SearchBar" type="text" placeholder="Please enter a city name." />
            <button onClick={searchHandler} className="SearchButton" type="submit">Search</button>
        </form>
    )
}

export default Form
