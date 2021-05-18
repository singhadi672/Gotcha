import React from 'react';
import { useMultiplayer } from '../../../../contexts/multiplayer-context';

export function LeaderBoard(){
    const {leaderBoard} = useMultiplayer();

    return(
        <div>
            {leaderBoard.leaderBoardData&&leaderBoard.leaderBoardData.map(item=>(
                <li>
                    <h1>{item.username}</h1>
                    <h4>{item.totalScore}</h4>
                </li>
            ))}
        </div>
    )
}   