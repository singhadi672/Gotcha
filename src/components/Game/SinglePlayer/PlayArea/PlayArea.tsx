import "./playArea.css";
import Loader from "../../../Loader/Loader";
import { Option, PlayAreaProp } from "../../../../types/quiz.type";
import { useGame } from "../../../../contexts/game-context";

function PlayArea({ accentPrimary, accentSecondary }: PlayAreaProp) {
  const {
    gameDispatch,
    setScoreboardDisplay,
    scoreboardDisplay,
    quiz,
    currentQuestion,
    setCurrentQuestion,
  } = useGame();

  function optionsHandler(option: Option) {
    if (currentQuestion.questionNum <= 10) {
      if (option.isCorrect) {
        gameDispatch({ type: "CORRECT_ANSWER", payload: 5 });
        currentQuestion.questionNum !== 10
          ? setCurrentQuestion((prev) => quiz?.questions[prev.questionNum])
          : setScoreboardDisplay({ ...scoreboardDisplay, display: true });
      } else {
        gameDispatch({ type: "WRONG_ANSWER", payload: 2 });

        currentQuestion.questionNum !== 10
          ? setCurrentQuestion((prev) => quiz?.questions[prev.questionNum])
          : setScoreboardDisplay({ ...scoreboardDisplay, display: true });
      }
    }
  }

  return quiz ? (
    <div className="play-area">
      <h1 className="game-title" style={{ background: accentPrimary }}>
        {quiz?.quizDetail?.themeName}
      </h1>
      <section className="game-play">
        <div className="question">
          {quiz?.quizType === "question" ? (
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
              style={{ background: accentSecondary }}
              onClick={() => optionsHandler(currentQuestion.options[0])}
            >
              {currentQuestion.options[0].value}
            </button>
            <button
              style={{ background: accentSecondary }}
              onClick={() => optionsHandler(currentQuestion.options[1])}
            >
              {currentQuestion.options[1].value}
            </button>
          </div>
          <div className="option option-bottom">
            <button
              style={{ background: accentSecondary }}
              onClick={() => optionsHandler(currentQuestion.options[2])}
            >
              {currentQuestion.options[2].value}
            </button>
            <button
              style={{ background: accentSecondary }}
              onClick={() => optionsHandler(currentQuestion.options[3])}
            >
              {currentQuestion.options[3].value}
            </button>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <Loader />
  );
}

export default PlayArea;
