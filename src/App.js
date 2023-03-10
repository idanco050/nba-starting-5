import PlayButton from "./components/PlayButton/PlayButton";
import "./App.css";
import PlayersGrid from "./components/PlayersGrid/PlayersGrid";
import { useSelector } from "react-redux";
import ResetButton from "./components/ResetButton/ResetButton";
import { playersActions, scoreBoardActions } from "./store/index";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import GameButton from './components/GameButton/GameButton'
import {useState} from 'react'
import GameWinner from './components/GameWinner/GameWinner'

function App() {
  const playerFive = useSelector((state) => state.players.playerFive);
  const compFive = useSelector((state) => state.players.compFive);
  const isGameOn = useSelector((state) => state.isGameOn.getReady);
  const isTipOff = useSelector((state) => state.isGameOn.gameStart);
  const switchesLeft1 = useSelector((state) => state.scoreBoard.switches1);
  const switchesLeft2 = useSelector((state) => state.scoreBoard.switches2);
  const swapPlayer1 = playersActions.changeOnePlayer;
  const swapPlayer2 = playersActions.changeOneComp;
  const switch1 = scoreBoardActions.player1Switch;
  const switch2 = scoreBoardActions.player2Switch;
  const [winner,setWinner] = useState(0)

  return (
    <div className="App">
      <h1 className="main-header">NBA Starting 5</h1>
      {!isGameOn && <p className = "description">With our app, you can create a starting lineup from a pool of every NBA player who has ever played in the league, and then watch as they compete against each other in a simulated game. Each player can only be switched twice before the game begins, so choose your lineup carefully! Our app generates a random set of starting players for each team, and then uses advanced algorithms to simulate a realistic game experience. Will your starting five come out on top?</p>}
      <PlayersGrid
        players={playerFive}
        swap={swapPlayer1}
        switch={switch1}
        sLeft={switchesLeft1}
      ></PlayersGrid>
      {isGameOn && !isTipOff && <ScoreBoard />}
      <PlayersGrid
        players={compFive}
        swap={swapPlayer2}
        switch={switch2}
        sLeft={switchesLeft2}
      ></PlayersGrid>
      {!isGameOn && <PlayButton></PlayButton>}
      {isGameOn && isTipOff && <GameWinner winner = {winner}></GameWinner>}
      {isGameOn && isTipOff && <ResetButton></ResetButton>}
      {isGameOn && !isTipOff && <GameButton setWinner = {setWinner}></GameButton>}
    </div>
  );
}

export default App;
