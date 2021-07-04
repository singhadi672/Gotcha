import { useParams, useHistory } from "react-router-dom";
import { useHome } from "../../contexts/home-context";
import "./gameCards.css";
import Loader from "../Loader/Loader";
import { ParamType } from "../../types/param.type";
import { QuizDetail } from "../../types/quiz.type";

function GameCards() {
  const params: ParamType = useParams();
  let history = useHistory();

  const { quizDetail } = useHome();
  const card: QuizDetail = quizDetail?.find((item) => item._id === params.id);

  return (
    <div className="game-detail-main">
      {card ? (
        <div
          className="game-detail"
          style={{ background: card.themeAccentPrimary }}
        >
          <section className="game-desc">
            <h1 className="game-desc-header">{card.themeName}</h1>
            <p className="description">{card.themeDescription}</p>
            <h3 className="quotation">
              Get a pair of socks ready! Yours are about to be knocked off!!
            </h3>
          </section>
          <section className="game-play-option">
            <button
              style={{ background: card.themeAccentSecondary }}
              onClick={() =>
                history.push({
                  pathname: `/${params.id}/game-singleplayer`,
                  state: card,
                })
              }
            >
              Play Alone
            </button>
            <h1>OR</h1>
            <button
              style={{ background: card.themeAccentSecondary }}
              onClick={() =>
                history.push({
                  pathname: `/${params.id}/game-multiplayer`,
                  state: card,
                })
              }
            >
              Play with Friends!
            </button>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default GameCards;
