import { useState } from "react";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import logo from "./static/cake_pic.png";
import BackgroundMusic from "./components/BackgroundMusic";
import Game from "./components/Game";
import "./App.css";

let theme = createTheme({
  palette: {
    primary: teal,
    secondary: teal,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#4db6ac",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#00796b",
            color: "#4db6ac",
          },
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  const [startGame, setStartGame] = useState(false);

  const handleGameStart = () => {
    setStartGame(true);
  };

  return (
    <div className="App">
      <header>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img src={logo} className="App-logo" alt="Úna and her fla" />
          </Grid>
        </Grid>
      </header>
      <main className="App-body">
        <ThemeProvider theme={theme}>
          {!startGame ? (
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h1">Happy birthday Úna!</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2">
                  In your honour, we have created a very special game for you.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" component="p">
                  In this high stakes game, your Twilight knowledge will be
                  tested. Over 13 rounds, you will be given a choice of two
                  quotes - one will be a real quote from one of the Twilight
                  books, and the other will be a fake quote written by Arse. Can
                  you guess which one is the real quote as written by our lord
                  and saviour Stephanie Meyer? Or will you be caught out by the
                  prose of your sadistic Limerick beour???
                </Typography>
              </Grid>
              <Grid item>
                <Zoom in={true} style={{ transitionDelay: "15000ms" }}>
                  <Button
                    variant={"contained"}
                    size={"large"}
                    onClick={handleGameStart}
                  >
                    Let's find out!
                  </Button>
                </Zoom>
              </Grid>
            </Grid>
          ) : (
            <>
              <BackgroundMusic />
              <Game />
            </>
          )}
        </ThemeProvider>
      </main>
    </div>
  );
};

export default App;
