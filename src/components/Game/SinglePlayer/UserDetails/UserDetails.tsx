import { useRef } from 'react';
import { useGame } from '../../../../contexts/game-context';
import './userDetails.css';

export type UserDetailsProp = {
    accentPrimary:string;
    accentSecondary:string;
    gameName:string;
}

function UserDetails({accentPrimary,accentSecondary,gameName}:UserDetailsProp){

    const inputRef = useRef(null);
    const {setGameStartAnimate,changeGameDisplay,gameStartAnimate,setScoreboardDisplay,scoreboardDisplay} = useGame();
    
    function startGamePlay(e){
        e.preventDefault();
        if(inputRef.current.value){
            setScoreboardDisplay({...scoreboardDisplay,playerName:inputRef.current.value})
            setGameStartAnimate(true);
            changeGameDisplay();
        }
    }

    return (
      <div
        className={
          gameStartAnimate ? "user-details user-active" : "user-details"
        }
      >
        <section
          className="user-section user-section-left"
          style={{ background: accentPrimary }}
        >
          <div className="user-section-header">
            <h1>You Selected:</h1>
            <h2>{gameName}</h2>
          </div>
        </section>
        <section
          className="user-section user-section-right"
          style={{ background: accentSecondary }}
        >
          <div className="user-details-form">
            <h2>Please Enter Your Name Before Starting Game</h2>
            <form className="details" action="">
              <input
                type="text"
                name="username"
                id=""
                ref={inputRef}
                required
                maxLength={20}
              />
              <button
                style={{ background: accentPrimary }}
                onClick={(e) => {
                  startGamePlay(e);
                }}
              >
                Play Game!
              </button>
            </form>
            <h5>-The game will start as soon as you hit the button!-</h5>
          </div>
        </section>
      </div>
    );
}

export default UserDetails;