import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {GameData} from '../../data/cardDetails';
import './gameCards.css';

export type ParamType = {
    id:string | undefined;
}


function GameCards(){
    const params:ParamType = useParams();
    let history = useHistory();

    const card = GameData.cards.find(item=>item.cardId===parseInt(params.id));

    
    return (
        <div className="game-detail-main">
            <div className="game-detail" style={{background:card.accentPrimary}}>
                <section className="game-desc" style={{borderRight:`0.2rem solid ${card.accentSecondary}`}}>
                    <h1 className="game-desc-header">
                        {card.cardName}
                    </h1>
                    <p className="description">
                        {card.cardDescription}
                    </p>
                    <h3 className='quotation'>
                        Get a pair of socks ready! Yours are about to be knocked off!!
                    </h3>
                </section>
                <section className="game-play-option">
                    <button style={{background:card.accentSecondary}} onClick={()=>history.push({pathname:`/${params.id}/game`,state:card,})}>Play Alone</button>
                    <h1>OR</h1>
                    <button style={{background:card.accentSecondary}}>Play with Friends!</button>
                </section>
            </div>
        </div>
    )
}

export default GameCards;