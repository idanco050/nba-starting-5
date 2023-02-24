import Button from '@mui/material/Button'
import {useDispatch} from 'react-redux'
import {gameOnActions , playersActions} from '../../store/index'

const GameButton = (props) =>
{
    const dispatch = useDispatch();
    const gameButtonHandler = () =>
    {
        dispatch(playersActions.resetPlayers());
        dispatch(gameOnActions.startGame())
        props.setWinner(Math.floor(Math.random() * 2) + 1)
    }
    return(
        <div style = {{margin: "4rem"}}>
     <Button
     onClick = {gameButtonHandler}
        variant="contained"
        color="primary"
      >
        Tip Off!
      </Button>
        </div>
    )
}

export default GameButton;