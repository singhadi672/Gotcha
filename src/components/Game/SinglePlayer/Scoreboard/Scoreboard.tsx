import { useGame } from "../../../../contexts/game-context";
import { useHistory } from "react-router-dom";
import "./scoreboard.css";
import { useState } from "react";
import Answers from "../Answers/Answers";

function Scoreboard() {
  const history = useHistory();
  const { quiz } = useGame();
  const [viewAnswer, setViewAnswer] = useState<boolean>(false);

  const { scoreboardDisplay, gameState } = useGame();
  return (
    <div className="scoreboard">
      {viewAnswer ? (
        <Answers
          questions={quiz.questions}
          accentSecondary={quiz.quizDetail.themeAccentSecondary}
          setViewAnswer={setViewAnswer}
          gameType={quiz.quizType}
        />
      ) : (
        <section
          className="scoreboard-section"
          style={{ background: quiz.quizDetail.themeAccentPrimary }}
        >
          <div className="score">
            <h1>
              Congratulations {scoreboardDisplay.playerName}, you finished the
              quiz!!
            </h1>
            <h3>Your Score: {gameState.totalScore}</h3>
            <button
              style={{ background: quiz.quizDetail.themeAccentSecondary }}
              onClick={() => setViewAnswer(true)}
            >
              view answers
            </button>
          </div>
          <div className="other-options">
            <button
              style={{ background: quiz.quizDetail.themeAccentSecondary }}
              onClick={() => history.push(`/${quiz.quizDetail._id}`)}
            >
              Play Again!
            </button>
            <h2>OR</h2>
            <button
              style={{ background: quiz.quizDetail.themeAccentSecondary }}
              onClick={() => history.replace(`/`)}
            >
              Other Theme!
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Scoreboard;
