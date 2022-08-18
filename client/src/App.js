import './App.css';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Display />
      </div>
    </div>
  );
}

export default App;
