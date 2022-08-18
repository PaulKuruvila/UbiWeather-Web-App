import React, {useState} from 'react';
import './Display.css';

function Display() {

    const [city, getCity] = useState('Sugar Land');
    const [dataToDisplay, fetchData] = useState();

    return (
        <div className="container">
            <h3>{city}</h3>
            <div>{dataToDisplay}</div>
        </div>
    )
}

export default Display
