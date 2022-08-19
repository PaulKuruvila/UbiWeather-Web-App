import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Display city={'Sugar Land'} dataToDisplay={'Something to display.'}/>
      </div>
    </div>
  );
}

export default App;
