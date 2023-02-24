import { useDispatch, useSelector } from "react-redux";
import { playersActions, gameOnActions } from "../../store/index";
import Button from "@mui/material/Button";
import classes from "./PlayButton.module.css";
const PlayButton = (props) => {
  const dispatch = useDispatch();
  const getPlayersButtonHandler = () => {
    dispatch(gameOnActions.getReady());
    for (let i = 0; i < 5; i++) {
      let id = Math.random() * 1500 + 1;
      fetch("https://www.balldontlie.io/api/v1/players/" + id)
        .then((response) => response.json())
        .then((data) => {
          dispatch(playersActions.addPlayerFive(data));
        });
    }

    for (let i = 0; i < 5; i++) {
      let id = Math.random() * 1500 + 1;
      fetch("https://www.balldontlie.io/api/v1/players/" + id)
        .then((response) => response.json())
        .then((data) => {
          dispatch(playersActions.addCompFive(data));
        });
    }
  };
  return (
    <div className={classes.out}>
      <Button
        onClick={getPlayersButtonHandler}
        variant="contained"
        color="primary"
        className={classes.button}
        size="large"
      >
        Start Game
      </Button>
    </div>
  );
};

export default PlayButton;
