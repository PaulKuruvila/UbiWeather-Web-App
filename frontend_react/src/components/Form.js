import React from 'react';
import './Navbar/Navbar.css';

const Form = ({ cityName, setCity }) => {

    const changeHandler = (e) => {
        console.log(e.target.value);
        setCity(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        console.log(`Searching for ${cityName}...`)

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
