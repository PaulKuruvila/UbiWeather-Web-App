import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav>
            <ul className="NavItems">
                <li className="Title">
                    <div className="TitleLogo"></div>
                    <h1 className="TitleText">UbiWeather</h1>
                </li>
                <li className="Options">
                    <li className="Search">
                        <input className="SearchBar" type="text" placeholder="Please enter a city name." />
                        <button className="SearchButton" type="submit">Search</button>
                    </li>
                    <li className="Icons">
                        <a href="https://github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </li>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
