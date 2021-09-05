import Slide from "@mui/material/Slide";
import cake_pic from "../static/cake_pic.png";

const Answer = ({ checked }) => {
  return (
    <>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <img src={cake_pic} width="50" height="auto" />
      </Slide>
    </>
  );
};

export default Answer;
