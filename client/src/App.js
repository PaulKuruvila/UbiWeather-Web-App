import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';
import React, {useState} from 'react';

function App() {
  const [ data, setData ] = useState({name:'City', coord:'Coordinates', weather:'Weather', icon:'Icon', temp_current:'Current', temp_high:'High', temp_low:'Low', weather_forecast_icon: [], weather_forecast_desc: [], weather_forecast_temp_max: [], weather_forecast_temp_min: [], temp_unit: 'C', weekday: -1});

  return (
    <div className="App">
      <Navbar data={data} updateData={data => setData(data)} />
      <div className="main">
        <Display data={data} changeDataDisplayed={data => setData(data)}/>
      </div>
    </div>
  );
}

export default App;
