import "./waitingRoom.css";
import { useMultiplayer } from "../../../../contexts/multiplayer-context";

export default function WaitingRoom({ accentPrimary, accentSecondary }) {
  const { socket, participants, setParticipants } = useMultiplayer();

  socket.on("get_users", (data) => {
    setParticipants(data);
  });

  function enableMultiplayerGamePlay() {
    const creator = participants.find((user) => user.userId === socket.id);
    if (creator.roomCreator) {
      socket.emit("start_multiplayer");
    }
  }

  return (
    <div className="waiting-room">
      <section className="waiting">
        <div className="room-details" style={{ background: accentPrimary }}>
          {participants[0] && <h1>Room Code: {participants[0].roomId}</h1>}
          <h4>Waiting for others to join...</h4>
        </div>
        <div className="participants">
          {participants.map((item) => (
            <li>
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                alt=""
              />
              <h4>{item.username} has Joined</h4>
            </li>
          ))}
        </div>
        <button
          style={{ background: accentSecondary }}
          onClick={enableMultiplayerGamePlay}
        >
          Play Game
        </button>
      </section>
    </div>
  );
}
