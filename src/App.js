import { useState } from "react";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import logo from "./static/cake_pic.png";
import BackgroundMusic from "./components/BackgroundMusic";
import Game from "./components/Game";
import "./App.css";

const App = () => {
  const [startGame, setStartGame] = useState(false);

  const handleGameStart = () => {
    setStartGame(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Úna and her fla" />
      </header>
      <main>
        {!startGame ? (
          <Zoom in={true} style={{ transitionDelay: "3000ms" }}>
            <Button
              variant={"contained"}
              size={"large"}
              onClick={handleGameStart}
            >
              Start the game!
            </Button>
          </Zoom>
        ) : (
          <>
            <BackgroundMusic />
            <Game />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
