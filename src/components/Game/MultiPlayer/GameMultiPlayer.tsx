import { useMultiplayer } from "../../../contexts/multiplayer-context";
import Room from "./Room/Room";
import { useParams } from "react-router";
import MultiplayGamePlay from "./MultiplayerGamePlay/MultiplayerGamePlay";
import WaitingRoom from "./WaitingRoom/WaitingRoom";
import { GameData } from "../../../data/cardDetails";
import { LeaderBoard } from "./LeaderBoard/LeaderBoard";

export default function GameMultiPlayer() {
  let params: any = useParams();
  const { accentSecondary, accentPrimary } = GameData.cards.find(
    (item) => item.cardId == params.id
  );

  const { waitingRoom, socket, setWaitingRoom, leaderBoard } = useMultiplayer();

  socket.on("set_multiplayer_playarea", (data) => {
    setWaitingRoom({ ...waitingRoom, multiplayerGameArea: data.status });
  });

  return leaderBoard.status ? (
    <LeaderBoard />
  ) : waitingRoom.multiplayerGameArea ? (
    <MultiplayGamePlay
      accentSecondary={accentSecondary}
      accentPrimary={accentPrimary}
    />
  ) : waitingRoom.waiting ? (
    <WaitingRoom
      accentSecondary={accentSecondary}
      accentPrimary={accentPrimary}
    />
  ) : (
    <Room accentSecondary={accentSecondary} accentPrimary={accentPrimary} />
  );
}
