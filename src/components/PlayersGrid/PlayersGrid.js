import PlayerItem from "../PlayerItem/PlayerItem";
import Grid from "@mui/material/Grid";
const PlayersGrid = (props) => {
  return (
    <Grid
      container
      spacing={2}
      justifyItems="center"
      sx={{ flexGrow: 1 }}
      alignItems="center"
      justifyContent="center"
    >
      {props.players.map((player, index) => {
        return (
          <Grid item xs={12} sm={3} md={2} key={index}>
            {" "}
            <PlayerItem
              data={player}
              index={index}
              swap={props.swap}
              switch={props.switch}
              sLeft={props.sLeft}
            ></PlayerItem>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default PlayersGrid;
