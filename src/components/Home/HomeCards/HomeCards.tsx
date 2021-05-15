import React from 'react'
import './homeCards.css';
import {HomeCardData} from '../../../data/homeCards';
import {useHistory} from 'react-router-dom';

function HomeCards(){

    let history = useHistory();
    return(
        <div className="home-cards">
            <h1 className="home-cards-header">Pick-A-Theme!</h1>
            <div className="cards-section">
                {HomeCardData.cardsData.map(item=>(
                    <div className="game-card" key={item.id}>
                        <h2>{item.themeName}</h2>
                        <img src={item.image} alt="theme" onClick={()=>history.push(`/${item.id}`)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCards;

