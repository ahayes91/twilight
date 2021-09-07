import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import wrong from "../static/wrong.png";
import right from "../static/right.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  images: {
    [theme.breakpoints.down("md")]: {
      maxHeight: "115px",
    },
  },
}));

const Answer = ({ checked, isCorrect }) => {
  const classes = useStyles();
  return (
    <>
      <Snackbar
        open={checked}
        onClose={() => {}}
        TransitionComponent={(props) => (
          <Slide {...props} direction="up" unmountOnExit />
        )}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {isCorrect ? (
          <img src={right} alt="Happy Bella" className={classes.images} />
        ) : (
          <img src={wrong} alt="Dead Carlisle" className={classes.images} />
        )}
      </Snackbar>
    </>
  );
};

export default Answer;
