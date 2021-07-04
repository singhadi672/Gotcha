import { useEffect, useReducer, useState } from "react";
import "../../SinglePlayer/PlayArea/playArea.css";
import { multiplayerReducer } from "../../../../reducers/multiplayer-reducer";
import { Option, PlayAreaProp } from "../../../../types/quiz.type";
import { useGame } from "../../../../contexts/game-context";
import { useMultiplayer } from "../../../../contexts/multiplayer-context";


export default function MultiplayGamePlay({
  accentPrimary,
  accentSecondary,
}: PlayAreaProp) {
  const { participants, socket, setLeaderBoard } = useMultiplayer();
  const { currentQuestion, setCurrentQuestion, quiz } = useGame();
  const [multiplayerState, multiplayerDispatch] = useReducer(
    multiplayerReducer,
    participants
  );
  const [buttonEnable, setButtonEnable] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(7);

  const creator = participants.find((user) => user.userId === socket.id);

  useEffect(() => {
    if (creator.roomCreator) {
      socket.emit("change_question");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  socket.on("change_current_question", (data) => {
    setCurrentQuestion(quiz.questions[data.questionNum]);
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

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
      setTimer(7);
    };
  }, [currentQuestion]);

  return (
    <div className="play-area">
      <h1 className="game-title" style={{ background: accentPrimary }}>
        {quiz.quizDetail.themeName}
      </h1>
      <section className="game-play">
        <h3>0:0{timer}</h3>
        <div className="question">
          {quiz.quizType === "question" ? (
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
