import classes from './GameWinner.module.css'
import React from 'react'
const GameWinner = (props) => 
{
    return(
        <div className  ={classes.winner}>
            {props.winner === 1 && (<React.Fragment><img className ={classes.jordenKobe} src ='https://i.pinimg.com/originals/ea/5e/82/ea5e8227d908daf4c1a49f61a41e8717.jpg' />
    <h1>Player {props.winner} Wins!</h1>
            </React.Fragment>)}
            {props.winner === 2 && (<React.Fragment><img className ={classes.kobeJorden}  src ='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1191301873.jpg'/>
            <h1>Player {props.winner} Wins!</h1>
            </React.Fragment>)}
        </div>
    )
}

export default GameWinner;