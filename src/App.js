import logo from './static/cake_pic.png';
import BackgroundMusic from './components/BackgroundMusic';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BackgroundMusic />
        <Game />
      </header>
    </div>
  );
}

export default App;
