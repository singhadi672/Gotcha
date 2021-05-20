import React, { useEffect, useReducer, useState } from "react";
import "../../SinglePlayer/PlayArea/playArea.css";
import { useParams, useHistory } from "react-router-dom";
import { multiplayerReducer } from "../../../../reducers/multiplayer-reducer";
import { QuizData } from "../../../../data/quiz";
import { Option, Question } from "../../../../data/quiz.type";
import { useGame } from "../../../../contexts/game-context";
import { PlayAreaProp } from "../../SinglePlayer/PlayArea/PlayArea";
import { useMultiplayer } from "../../../../contexts/multiplayer-context";

export type ACTION =
  | { type: "CORRECT_ANSWER"; payload: { user: string; score: 5 } }
  | { type: "WRONG_ANSWER"; payload: { user: string; score: 2 } }
  | { type: "UPDATE_STATE"; payload: any }
  | { type: "UPDATE_ISANSWERED_STATE"; payload: any };

export default function MultiplayGamePlay({
  accentPrimary,
  accentSecondary,
}: PlayAreaProp) {
  const { id }: any = useParams();
  const { participants, socket, leaderBoard, setLeaderBoard } =
    useMultiplayer();
  const { gameName, questions, gameType } = findQuizDataById();
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0]
  );
  const [multiplayerState, multiplayerDispatch] = useReducer(
    multiplayerReducer,
    participants
  );
  const [buttonEnable, setButtonEnable] = useState(true);

  function findQuizDataById() {
    return QuizData.quiz.find((item) => item.gameId === parseInt(id));
  }

  const creator = participants.find((user) => user.userId === socket.id);

  useEffect(() => {
    if (creator.roomCreator) {
      socket.emit("change_question");
    }
  }, []);

  socket.on("change_current_question", (data) => {
    setCurrentQuestion(questions[data.questionNum]);
    setButtonEnable(true);
  });

  socket.on("get final score", () => {
    socket.emit(
      "final result from client",
      multiplayerState.find((user) => user.userId === socket.id)
    );
  });

  socket.on("change view to leaderBoard", (data) => {
    setLeaderBoard({ status: true, leaderBoardData: data });
  });

  function optionsHandler(option: Option) {
    if (option.isCorrect) {
      multiplayerDispatch({
        type: "CORRECT_ANSWER",
        payload: { user: socket.id, score: 5 },
      });
    } else {
      multiplayerDispatch({
        type: "WRONG_ANSWER",
        payload: { user: socket.id, score: 2 },
      });
    }
    setButtonEnable(false);
  }

  return (
    <div className="play-area">
      <h1 className="game-title" style={{ background: accentPrimary }}>
        {gameName}
      </h1>
      <section className="game-play">
        <div className="question">
          {gameType === "question" ? (
            <h3>
              Q{currentQuestion.questionNum}: {currentQuestion.question}
            </h3>
          ) : (
            <div className="image-question">
              <img src={currentQuestion.question} alt={"question"} />
            </div>
          )}
        </div>
        <div className="options" style={{ background: accentPrimary }}>
          <div className="option option-top">
            <button
              style={{
                background: buttonEnable ? accentSecondary : "grey",
                cursor: buttonEnable ? "pointer" : "not-allowed",
              }}
              disabled={!buttonEnable}
              onClick={() => optionsHandler(currentQuestion.options[0])}
            >
              {currentQuestion.options[0].value}
            </button>
            <button
              style={{
                background: buttonEnable ? accentSecondary : "grey",
                cursor: buttonEnable ? "pointer" : "not-allowed",
              }}
              disabled={!buttonEnable}
              onClick={() => optionsHandler(currentQuestion.options[1])}
            >
              {currentQuestion.options[1].value}
            </button>
          </div>
          <div className="option option-bottom">
            <button
              style={{
                background: buttonEnable ? accentSecondary : "grey",
                cursor: buttonEnable ? "pointer" : "not-allowed",
              }}
              disabled={!buttonEnable}
              onClick={() => optionsHandler(currentQuestion.options[2])}
            >
              {currentQuestion.options[2].value}
            </button>
            <button
              style={{
                background: buttonEnable ? accentSecondary : "grey",
                cursor: buttonEnable ? "pointer" : "not-allowed",
              }}
              disabled={!buttonEnable}
              onClick={() => optionsHandler(currentQuestion.options[3])}
            >
              {currentQuestion.options[3].value}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
