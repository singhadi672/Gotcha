import {useLocation} from 'react-router-dom';
import UserDetails from './UserDetails/UserDetails';
import PlayArea from './PlayArea/PlayArea';
import Scoreboard from './Scoreboard/Scoreboard';
import { useGame } from '../../contexts/game-context';

function Game(){

    let game:any = useLocation().state;
    const {accentPrimary,accentSecondary,cardName} = game;

    const {gameDisplay,scoreboardDisplay} = useGame();

    return(
        <>
            {
                gameDisplay&&<UserDetails 
                accentPrimary={accentPrimary}
                accentSecondary={accentSecondary}
                gameName={cardName}
                />
            }
            {scoreboardDisplay.display?<Scoreboard/>
            :
            <PlayArea 
                accentPrimary={accentPrimary}
                accentSecondary={accentSecondary}
            />}
        </>
    )
}

export default Game;