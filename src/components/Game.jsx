import { useState } from "react";
import Button from "@mui/material/Button";
import Answer from "./Answer";
import Quote from "./Quote";
import realQuotes from "../quotes_data/real";
import fakeQuotes from "../quotes_data/fake";

const getRandomQuoteIndex = (quotes) =>
  Math.floor(Math.random() * quotes.length);

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

  const handleCheckAnswer = () => {
    setChecked((prev) => !prev);
  };

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
  };

  return (
    <>
      {currentFakeQuotes.length > 0 ? (
        <>
          <Quote quote={currentRealQuotes[realQuoteIndex]} />
          <Quote quote={currentFakeQuotes[fakeQuoteIndex]} />
          {!checked && (
            <Button onClick={handleCheckAnswer}>Check answer</Button>
          )}
          <Answer checked={checked} />
          {checked && <Button onClick={updateQuotes}>Try again</Button>}
        </>
      ) : (
        <p>You're done! Refresh the page to play again</p>
      )}
    </>
  );
};

export default Game;

/*

- Click Start Game (Play music on click)
- Play music on click
- Get 2 random quotes from store, show them on cards
- Highlight clicked card, store selection
- Check answers on click:
    - Set checked to true, check and show answer

- "Next" button: Remove these quotes from current store, set checked to false

*/
