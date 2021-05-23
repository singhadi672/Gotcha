import { useGame } from "../../../../contexts/game-context";
import { useHistory, useLocation } from "react-router-dom";
import "./scoreboard.css";
import { QuizData } from "../../../../data/quiz";
import { useState } from "react";
import Answers from "../Answers/Answers";

function Scoreboard() {
  let game: any = useLocation().state;
  const history = useHistory();
  const { accentPrimary, accentSecondary, cardId } = game;
  const [viewAnswer, setViewAnswer] = useState(false);
  const { questions, gameType } = findQuizDataById();

  function findQuizDataById() {
    return QuizData.quiz.find((item) => item.gameId === parseInt(cardId));
  }

  const { scoreboardDisplay, gameState } = useGame();
  return (
    <div className="scoreboard">
      {viewAnswer ? (
        <Answers
          questions={questions}
          accentSecondary={accentSecondary}
          setViewAnswer={setViewAnswer}
          viewAnswer={viewAnswer}
          gameType={gameType}
        />
      ) : (
        <section
          className="scoreboard-section"
          style={{ background: accentPrimary }}
        >
          <div className="score">
            <h1>
              Congratulations {scoreboardDisplay.playerName}, you finished the
              quiz!!
            </h1>
            <h3>Your Score: {gameState.totalScore}</h3>
            <button
              style={{ background: accentSecondary }}
              onClick={() => setViewAnswer(true)}
            >
              view answers
            </button>
          </div>
          <div className="other-options">
            <button
              style={{ background: accentSecondary }}
              onClick={() => history.push(`/${cardId}`)}
            >
              Play Again!
            </button>
            <h2>OR</h2>
            <button
              style={{ background: accentSecondary }}
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
