import Slide from "@mui/material/Slide";

const Answer = ({ checked, isCorrect }) => {
  return (
    <>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {isCorrect ? <p>✅</p> : <p>❌</p>}
      </Slide>
    </>
  );
};

export default Answer;
