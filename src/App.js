import './App.css';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';

function App() {

  const cityName = "Sugar Land";

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Display city={cityName}/>
      </div>
      <h3>{cityName}</h3>
      <p>Display Weather Data Here</p>
    </div>
  );
}

export default App;
