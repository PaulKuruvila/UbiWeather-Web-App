import React from 'react';
import './Navbar/Navbar.css';
import Display from './Display/Display';

const Form = ({ cityName, setCity }) => {

    const fetchData = async (e) => {
        const city = cityName;
        const options = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(city)
        };

        const response = await fetch('/searchCity', options);
        const jsonData = await response.json();
        console.log("Data fetched:");
        console.log(jsonData);

        Display(city, jsonData);
    }

    const changeHandler = (e) => {
        console.log(`Search bar: ${e.target.value}`);
        setCity(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        console.log(`Searching for ${cityName}...`);
        fetchData(e);
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
