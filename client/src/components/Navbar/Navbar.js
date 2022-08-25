import React, {useState} from 'react';  
import './Navbar.css';
import Form from '../Form.js';


const Navbar = props => {

    // try passing data here as parameters to function in parent component & have useState hook to store/update the values
    const [data, setData] = useState({dataLoaded:false,name:'City',coord:'Coordinates',weather:'Weather',icon:'01d',temp_current:'Current',temp_high:'High',temp_low:'Low'});

    return (
        <div>
            <nav>
                <ul className="NavItems">
                    <li className="Title" onClick={() => window.location.href = '/'}>
                        <div className="TitleLogo"></div>
                        <h1 className="TitleText">UbiWeather</h1>
                    </li>
                    <Form changeData={data => props.updateData(data)}/>
                    <li className="Icons">
                        <a href="https://github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
