import { ACTION } from "../components/Game/MultiPlayer/MultiplayerGamePlay/MultiplayerGamePlay";

export function multiplayerReducer(state:any,action:ACTION){
    switch (action.type){

        case 'CORRECT_ANSWER':
            
           return state.map(item=>{
               if(item.userId===action.payload.user){
                   return {...item,isAnswered:true,totalScore:item.totalScore+action.payload.score}
               }
               return item;
           })
        case 'WRONG_ANSWER':
           return state.map(item=>{
               if(item.userId===action.payload.user){
                   return {...item,isAnswered:true,totalScore:item.totalScore-action.payload.score}
               }
               return item;
           })
        default:
            return state;
    }
}