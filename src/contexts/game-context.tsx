import { createContext, useContext,useState,useReducer } from 'react';
import { scoreReducer } from '../reducers/score-reducer';
import {InitialReducer} from '../components/Game/PlayArea/PlayArea';


export const GameContext = createContext<any>({});


export function GameProvider({children}){

    const [gameStartAnimate,setGameStartAnimate] = useState(false);
    const [gameDisplay,setGameDisplay] = useState(true);
    const [scoreboardDisplay,setScoreboardDisplay] = useState({display:false,playerName:null});

    const initialValue:InitialReducer = {totalScore:0};
    const [gameState,gameDispatch] = useReducer(scoreReducer,initialValue);

    function changeGameDisplay(){
        setTimeout(() => {
            setGameDisplay(false);
        }, 500);
    }


    return(
        <GameContext.Provider 
            value={{
                gameDisplay,
                gameStartAnimate,
                setGameDisplay,
                setGameStartAnimate,
                changeGameDisplay,
                gameState,
                gameDispatch,
                scoreboardDisplay,
                setScoreboardDisplay
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export function useGame(){
    return useContext(GameContext);
}