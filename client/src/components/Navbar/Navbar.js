import React, {useState} from 'react';  
import './Navbar.css';
import Form from '../Form.js';
import Display from '../Display/Display';


const Navbar = () => {
    const [cityName, setCity] = useState("");

    const fetchData = async (e) => {
        e.preventDefault();
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

    return (
        <nav>
            <ul className="NavItems">
                <li className="Title">
                    <div className="TitleLogo"></div>
                    <h1 className="TitleText">UbiWeather</h1>
                </li>
                <Form onSubmit={fetchData} cityName={cityName} setCity={setCity} />
                <li className="Icons">
                    <a href="https://github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
