import React, { useReducer, useState } from 'react';
import './playArea.css';
import {useParams,useHistory} from 'react-router-dom';
import {QuizData} from '../../../data/quiz';
import { Option, Question } from '../../../data/quiz.type';
import { useGame } from '../../../contexts/game-context';


export type PlayAreaProp = {
    accentPrimary:string;
    accentSecondary:string;
}

export type InitialReducer = {
    totalScore:number;
}

export type ACTION = 
    | {type:'CORRECT_ANSWER',payload:5}
    | {type:'WRONG_ANSWER',payload:2};


function PlayArea({accentPrimary,accentSecondary}:PlayAreaProp){

    const {id}:any = useParams();
    const {gameName,questions,gameType} = findQuizDataById();
    const {gameDispatch,setScoreboardDisplay,scoreboardDisplay} = useGame();
    const [currentQuestion,setCurrentQuestion] = useState<Question>(questions[0]);
    
    let history = useHistory();


    function findQuizDataById(){
        return QuizData.quiz.find(item=>item.gameId===parseInt(id));
    }

    function optionsHandler(option:Option){
        if(currentQuestion.questionNum<=10){
            console.log(currentQuestion.questionNum);
            if(option.isCorrect){

                gameDispatch({type:'CORRECT_ANSWER',payload:5})
                {currentQuestion.questionNum!==10?setCurrentQuestion(prev=>questions[prev.questionNum]):setScoreboardDisplay({...scoreboardDisplay,display:true})}
            }
            
            else{
                
                gameDispatch({type:"WRONG_ANSWER",payload:2})
                {currentQuestion.questionNum!==10?setCurrentQuestion(prev=>questions[prev.questionNum]):setScoreboardDisplay({...scoreboardDisplay,display:true})}
            }
        }
    }

    return (
        <div className="play-area">
            <h1 className="game-title" style={{background:accentPrimary}}>{gameName}</h1>
            <section className="game-play">
                <div className="question">
                    {gameType==='question'
                        ?
                            <h3>Q{currentQuestion.questionNum}: {currentQuestion.question}</h3>
                        :
                            <div className="image-question">
                                <img src={currentQuestion.question} alt={"question"}/>
                            </div>
                    }
                </div>
                <div className="options" style={{background:accentPrimary}}>
                   <div className="option option-top">
                       <button style={{background:accentSecondary}} onClick={()=>optionsHandler(currentQuestion.options[0])}>{currentQuestion.options[0].value}</button>
                       <button style={{background:accentSecondary}} onClick={()=>optionsHandler(currentQuestion.options[1])}>{currentQuestion.options[1].value}</button>
                   </div>
                   <div className="option option-bottom">
                       <button style={{background:accentSecondary}} onClick={()=>optionsHandler(currentQuestion.options[2])}>{currentQuestion.options[2].value}</button>
                       <button style={{background:accentSecondary}} onClick={()=>optionsHandler(currentQuestion.options[3])}>{currentQuestion.options[3].value}</button>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default PlayArea;