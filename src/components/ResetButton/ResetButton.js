import { useDispatch } from "react-redux";
import {
  playersActions,
  gameOnActions,
  scoreBoardActions,
} from "../../store/index";
import Button from "@mui/material/Button";
import classes from "./ResetButton.module.css";
const ResetButton = (props) => {
  const dispatch = useDispatch();

  const resetGame = () => {
    dispatch(gameOnActions.endGame());
    dispatch(scoreBoardActions.reset());
  };
  return (
    <div className={classes.out}>
      <Button
        onClick={resetGame}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Another One!
      </Button>
    </div>
  );
};

export default ResetButton;
