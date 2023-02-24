import {createSlice,configureStore} from '@reduxjs/toolkit'

const initPlayersState = {
    playerFive:[],
    compFive:[],
}

const playersSlice = createSlice({
    name:'players',
    initialState:initPlayersState,
    reducers:{
        addPlayerFive(state,action)
        {

            state.playerFive.push(action.payload)
        }
        ,
        addCompFive(state,action)
        {
            state.compFive.push(action.payload)
        }
        ,
        changeOnePlayer(state,action)
        {
            state.playerFive[action.payload.index] = action.payload.player
        }
        ,

        changeOneComp(state,action)
        {
            state.compFive[action.payload.index] = action.payload.player
        }
        ,
        resetPlayers(state)
        {
            state.compFive = []
            state.playerFive = []
        }
        
    }
})

const initGameOnState ={
    getReady:false,
    gameStart:false,
}
const gameOnSlice = createSlice({
name:"isGameOn",
initialState:initGameOnState,
reducers:{
    getReady(state)
    {
     state.getReady = true;
    },
    startGame(state)
    {
state.gameStart = true;
    }
    ,
    endGame(state)
    {
        state.getReady = false;
        state.gameStart = false;
    }

}
});

const initScoreBaord = {
    switches1: 2,
    switches2 : 2,
    score1 : 0,
    score2: 0,
}

const scoreBoardSlice = createSlice({
    name :"scoreBoard",
    initialState: initScoreBaord,
    reducers:{
        player1Switch(state)
        {
            state.switches1--;
        },
        player2Switch(state)
        {
            state.switches2--;
        }
        ,
        reset(state)
        {
            state.switches1 = 2;
            state.switches2 = 2;
        }
    
    }
})

const store = configureStore({
    reducer:{
        players:playersSlice.reducer,
        isGameOn:gameOnSlice.reducer,
        scoreBoard:scoreBoardSlice.reducer,
    }});

export const playersActions = playersSlice.actions;
export const gameOnActions = gameOnSlice.actions;
export const scoreBoardActions = scoreBoardSlice.actions;

export default store;

