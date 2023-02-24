import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

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
    <Card sx={{ maxWidth: 345 }} style={{ borderRadius: 16,backgroundColor: "peachpuff",fontFamily: "Georgia"} }>
      <CardContent>
        <h1>
          {props.data.first_name} {props.data.last_name}
        </h1>
        <h3>{props.data.team.full_name}</h3>
        <Button size="small" onClick={switchPlayerHandler}>
          switch player
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlayerItem;
