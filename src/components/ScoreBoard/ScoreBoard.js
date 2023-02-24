import classes from "./ScoreBoard.module.css";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
const ScoreBoard = (props) => {
  const switchesLeft1 = useSelector((state) => state.scoreBoard.switches1);
  const switchesLeft2 = useSelector((state) => state.scoreBoard.switches2);
  return (
    <div className={classes.scoreBoard}>
      <Box margin={3}>
        <h1>Player 1</h1>
        {switchesLeft1 > 0 && <h3>Switches left: {switchesLeft1}</h3>}
        {switchesLeft1 === 0 && <h3>No More Switches!</h3>}
      </Box>
      <div className={classes.vs}>VS</div>
      <Box margin={3}>
        <h1>Player 2</h1>
        {switchesLeft2 > 0 && <h3>Switches left: {switchesLeft2}</h3>}
        {switchesLeft2 === 0 && <h3>No More Switches!</h3>}
      </Box>
    </div>
  );
};

export default ScoreBoard;
