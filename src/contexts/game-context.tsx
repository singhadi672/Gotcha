import { createContext, useContext, useState, useReducer } from "react";
import { scoreReducer } from "../reducers/score-reducer";
import { InitialReducer } from "../types/quiz.type";
import axios from "axios";

export const GameContext = createContext<any>({});

export function GameProvider({ children }) {
  const [gameStartAnimate, setGameStartAnimate] = useState(false);
  const [gameDisplay, setGameDisplay] = useState(true);
  const [scoreboardDisplay, setScoreboardDisplay] = useState({
    display: false,
    playerName: null,
  });
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  async function getQuizData(id) {
    const response = await axios.get(
      `https://guarded-springs-32113.herokuapp.com/quiz/${id}`
    );
    setCurrentQuestion(response.data.quiz?.questions[0]);
    setQuiz(response.data.quiz);
  }

  const initialValue: InitialReducer = { totalScore: 0 };
  const [gameState, gameDispatch] = useReducer(scoreReducer, initialValue);

  function changeGameDisplay() {
    setTimeout(() => {
      setGameDisplay(false);
    }, 500);
  }

  return (
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
        setScoreboardDisplay,
        quiz,
        getQuizData,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
