import React, {useState} from 'react';  
import './Navbar.css';
import Form from '../Form.js';


const Navbar = () => {

    // const [ cityName, setCity ] = useState(props.cityName);
    // const [ data, setData ] = useState(props.data)
    const [cityName, setCity] = useState('');
    // try passing data here as parameters to function in parent component & have useState hook to store/update the values
    const [data, setData] = useState({dataLoaded:false,name:'City',coord:'Coordinates',weather:'Weather',icon:'01d',temp_current:'Current',temp_high:'High',temp_low:'Low'});


    return (
        <div>
            <nav>
                <ul className="NavItems">
                    <li className="Title">
                        <div className="TitleLogo"></div>
                        <h1 className="TitleText">UbiWeather</h1>
                    </li>
                    <Form cityName={cityName} changeCity={cityName => setCity(cityName)}
                     changeData={data => setData(data)}/>
                    <li className="Icons">
                        <a href="https://github.com/PaulKuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/paulkuruvila" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </nav>
            <div className="dataDisplayed" style={{display: data['dataLoaded'] ? 'block' : 'none'}}>
                <h1>{data['name']}</h1>
                <p>{data['coord']}</p>
                <p>{data['weather']}</p>
                <img src={`/weather_icons/${data['icon']}.png`} alt="Image not found." />
                <h2>Temp</h2>
                <p>{`Current: ${data['temp_current']}`}</p>
                <p>{`High ${data['temp_high']}`}</p>
                <p>{`Low ${data['temp_low']}`}</p>
            </div>
        </div>
    )
}

export default Navbar
