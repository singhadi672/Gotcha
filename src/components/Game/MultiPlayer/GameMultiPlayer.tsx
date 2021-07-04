import { useMultiplayer } from "../../../contexts/multiplayer-context";
import Room from "./Room/Room";
import { useLocation } from "react-router";
import MultiplayGamePlay from "./MultiplayerGamePlay/MultiplayerGamePlay";
import WaitingRoom from "./WaitingRoom/WaitingRoom";
import { LeaderBoard } from "./LeaderBoard/LeaderBoard";
import { useGame } from "../../../contexts/game-context";
import { useEffect } from "react";
import { QuizDetail } from "../../../types/quiz.type";

export default function GameMultiPlayer() {
  let game: QuizDetail | any = useLocation().state;
  const { themeAccentPrimary, themeAccentSecondary, _id } = game;

  const { waitingRoom, socket, setWaitingRoom, leaderBoard } = useMultiplayer();
  const { getQuizData } = useGame();

  useEffect(() => {
    getQuizData(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  socket.on("set_multiplayer_playarea", (data) => {
    setWaitingRoom({ ...waitingRoom, multiplayerGameArea: data.status });
  });

  return leaderBoard.status ? (
    <LeaderBoard
      accentSecondary={themeAccentSecondary}
      accentPrimary={themeAccentPrimary}
    />
  ) : waitingRoom.multiplayerGameArea ? (
    <MultiplayGamePlay
      accentSecondary={themeAccentSecondary}
      accentPrimary={themeAccentPrimary}
    />
  ) : waitingRoom.waiting ? (
    <WaitingRoom
      accentSecondary={themeAccentSecondary}
      accentPrimary={themeAccentPrimary}
    />
  ) : (
    <Room
      accentSecondary={themeAccentSecondary}
      accentPrimary={themeAccentPrimary}
    />
  );
}
