import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Answer from "./Answer";
import Quote from "./Quote";
import realQuotes from "../quotes_data/real";
import fakeQuotes from "../quotes_data/fake";

const getRandomQuoteIndex = (quotes) => getRandomInt(quotes.length);

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Game = () => {
  const [currentFakeQuotes, setCurrentFakeQuotes] = useState(fakeQuotes);
  const [currentRealQuotes, setCurrentRealQuotes] = useState(realQuotes);
  const [fakeQuoteIndex, setFakeQuoteIndex] = useState(
    getRandomQuoteIndex(currentFakeQuotes)
  );
  const [realQuoteIndex, setRealQuoteIndex] = useState(
    getRandomQuoteIndex(currentRealQuotes)
  );
  const [checked, setChecked] = useState(false);
  const [answer, setAnswer] = useState("");
  const [randomInt, setRandomInt] = useState(getRandomInt(2));
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const updateQuotes = () => {
    const newRealQuotes = Array.from(currentRealQuotes);
    const newFakeQuotes = Array.from(currentFakeQuotes);
    newRealQuotes.splice(realQuoteIndex, 1);
    newFakeQuotes.splice(fakeQuoteIndex, 1);
    setCurrentRealQuotes(newRealQuotes);
    setCurrentFakeQuotes(newFakeQuotes);
    setChecked(false);
    setFakeQuoteIndex(getRandomQuoteIndex(newFakeQuotes));
    setRealQuoteIndex(getRandomQuoteIndex(newRealQuotes));
    setAnswer("");
    setRandomInt(getRandomInt(2));
    let currentScore = Number(score);
    if (isCorrect) {
      currentScore++;
    }
    setScore(currentScore);
  };

  const currentRealQuote = currentRealQuotes[realQuoteIndex];
  const currentFakeQuote = currentFakeQuotes[fakeQuoteIndex];

  const leftQuote = randomInt === 1 ? currentRealQuote : currentFakeQuote;
  const rightQuote =
    leftQuote === currentRealQuote ? currentFakeQuote : currentRealQuote;

  const handleCardSelect = (quote) => {
    setAnswer(quote);
  };

  const handleCheckAnswer = () => {
    if (answer === currentRealQuote) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setChecked((prev) => !prev);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ paddingTop: "5vh" }}
    >
      {currentFakeQuotes.length > 0 ? (
        <>
          <Grid item xs={12} sm={6}>
            <Quote
              quote={leftQuote}
              onCardSelect={handleCardSelect}
              selected={answer === leftQuote}
              enabled={!checked}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Quote
              quote={rightQuote}
              onCardSelect={handleCardSelect}
              selected={answer === rightQuote}
              enabled={!checked}
            />
          </Grid>
          <Grid item xs={12}>
            {!checked && (
              <Button
                variant={"contained"}
                size={"large"}
                onClick={handleCheckAnswer}
                disabled={answer === ""}
              >
                Check answer
              </Button>
            )}
            {checked && (
              <Button
                variant={"contained"}
                size={"large"}
                onClick={updateQuotes}
              >
                Next
              </Button>
            )}
          </Grid>
          <div>
            <Answer checked={checked} isCorrect={isCorrect} />
          </div>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography variant="h3" component="p">
              You scored {score}/13!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="p">
              {score < 13
                ? `Pathetic. You're a disgrace.`
                : `Amazing! Not even our auld Arse could catch you!`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="p">
              Happy birthday Úna, we love you loads!
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Game;
