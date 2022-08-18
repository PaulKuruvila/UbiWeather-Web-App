import React, {useState} from 'react';  
import './Navbar.css';
import Form from '../Form.js';


const Navbar = () => {
    return (
        <nav>
            <ul className="NavItems">
                <li className="Title">
                    <div className="TitleLogo"></div>
                    <h1 className="TitleText">UbiWeather</h1>
                </li>
                <Form />
                <li className="Icons">
                    <a href="https://github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
