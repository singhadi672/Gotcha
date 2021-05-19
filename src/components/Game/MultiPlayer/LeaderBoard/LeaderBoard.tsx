import "./leaderBoard.css";
import { useMultiplayer } from "../../../../contexts/multiplayer-context";
import { useHistory } from "react-router-dom";

export function LeaderBoard({ accentPrimary, accentSecondary }: any) {
  const { leaderBoard, socket } = useMultiplayer();
  let history = useHistory();

  function playAgainHandler() {
    socket.emit("delete_room");
    history.goBack();
  }

  function selectThemeHandler(){
    socket.emit("delete_room");
    history.push('/');
  }

  return (
    <div className="leaderboard">
      <div
        className="leaderboard-section"
        style={{ background: accentPrimary }}
      >
        <section
          className="score-board"
          style={{ borderRight: `0.2rem solid ${accentSecondary}` }}
        >
          <h1>Congrats! you guys finished the quiz</h1>
          <h3>Here are The Scores:</h3>
          <div className="score-list">
            {leaderBoard &&
              leaderBoard.leaderBoardData.map((user) => (
                <li>
                  <h2>{user.username}</h2>
                  <h2>:</h2>
                  <h2>{user.totalScore}</h2>
                </li>
              ))}
          </div>
        </section>
        <section className="leaderboard-options">
          <button
            style={{ background: accentSecondary }}
            onClick={playAgainHandler}
          >
            Play Again!
          </button>
          <h1>OR</h1>
          <button style={{ background: accentSecondary }} onClick={selectThemeHandler}>Select Theme!</button>
        </section>
      </div>
    </div>
  );
}
