import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import classes from './PlayerItem.module.css'

const PlayerItem = (props) => {
  const dispatch = useDispatch();
  const switchPlayerHandler = () => {
    if (props.sLeft > 0) {
      let id = Math.random() * 1500 + 1;
      fetch("https://www.balldontlie.io/api/v1/players/" + id)
        .then((response) => response.json())
        .then((data) => {
          dispatch(props.swap({ player: data, index: props.index }));
        });
      dispatch(props.switch());
    }
  };
  return (
    <Card className ={classes.playerCardRoot}>
      <CardContent>
        <h1 className = {classes.playerCardTitle}>
          {props.data.first_name} {props.data.last_name}
        </h1>
        <h3 className = {classes.playerCardSubheader}>{props.data.team.full_name}</h3>
        <Button size="small" onClick={switchPlayerHandler}>
          switch player
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlayerItem;
