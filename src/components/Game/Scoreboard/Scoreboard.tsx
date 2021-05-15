import { useGame } from '../../../contexts/game-context';
import {useHistory, useLocation} from 'react-router-dom';
import './scoreboard.css';

function Scoreboard(){

    let game:any = useLocation().state;
    const history = useHistory();
    console.log(game);
    const {accentPrimary,accentSecondary,cardId} = game;

    const {scoreboardDisplay,gameState} = useGame();
    return(
        <div className="scoreboard">
            <section className="scoreboard-section" style={{background:accentPrimary}}>
                <div className="score" style={{borderRight:`0.2rem solid ${accentSecondary}`}}>
                    <h1>Congratulations {scoreboardDisplay.playerName}, you finished the quiz!!</h1>
                    <h3>Your Score: {gameState.totalScore}</h3>
                </div>
                <div className="other-options">
                    <button style={{background:accentSecondary}} onClick={()=>history.push(`/${cardId}`)}>Play Again!</button>
                        <h2>OR</h2>
                    <button style={{background:accentSecondary}} onClick={()=>history.replace(`/`)}>Other Theme!</button>
                </div>
            </section>
        </div>
    )
}

export default Scoreboard;