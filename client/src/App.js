import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';
import React, {useState} from 'react';

function App() {
  const [ data, setData ] = useState({name:'City',coord:'Coordinates',weather:'Weather',icon:'Icon',temp_current:'Current',temp_high:'High',temp_low:'Low'});

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Display data={data} changeDataDisplayed={data => setData(data)}/>
      </div>
    </div>
  );
}

export default App;
