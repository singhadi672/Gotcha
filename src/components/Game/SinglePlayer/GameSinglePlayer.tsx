import { useLocation } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import PlayArea from "./PlayArea/PlayArea";
import Scoreboard from "./Scoreboard/Scoreboard";
import { useGame } from "../../../contexts/game-context";
import { useEffect } from "react";
import { QuizDetail } from "../../../types/quiz.type";

function GameSinglePlayer() {
  let game: QuizDetail | any = useLocation().state;
  const { themeAccentPrimary, themeAccentSecondary, themeName, _id } = game;

  const { gameDisplay, scoreboardDisplay, getQuizData } = useGame();

  useEffect(() => {
    getQuizData(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {gameDisplay && (
        <UserDetails
          accentPrimary={themeAccentPrimary}
          accentSecondary={themeAccentSecondary}
          gameName={themeName}
        />
      )}
      {scoreboardDisplay.display ? (
        <Scoreboard />
      ) : (
        <PlayArea
          accentPrimary={themeAccentPrimary}
          accentSecondary={themeAccentSecondary}
        />
      )}
    </>
  );
}

export default GameSinglePlayer;
