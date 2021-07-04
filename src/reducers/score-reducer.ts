import { SINGLE_PLAYER_ACTION, InitialReducer } from "../types/quiz.type";

export function scoreReducer(state:InitialReducer,action:SINGLE_PLAYER_ACTION){
    switch(action.type){
        case "CORRECT_ANSWER":
            return {...state,totalScore:state.totalScore+action.payload};
        case "WRONG_ANSWER":
            return {...state,totalScore:state.totalScore-action.payload}
        default:
            return state;
    }
}