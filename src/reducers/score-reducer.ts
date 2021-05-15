import { ACTION, InitialReducer } from "../components/Game/PlayArea/PlayArea";

export function scoreReducer(state:InitialReducer,action:ACTION){
    switch(action.type){
        case "CORRECT_ANSWER":
            return {...state,totalScore:state.totalScore+action.payload};
        case "WRONG_ANSWER":
            return {...state,totalScore:state.totalScore-action.payload}
        default:
            return state;
    }
}