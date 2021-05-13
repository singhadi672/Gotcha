import React from 'react'
import './homeCards.css';
import {HomeCardData} from '../../../data/homeCards';

function HomeCards(){
    return(
        <div className="home-cards">
            <h1 className="home-cards-header">Pick-A-Theme!</h1>
            <div className="cards-section">
                {HomeCardData.cardsData.map(item=>(
                    <div className="game-card">
                        <h2>{item.themeName}</h2>
                        <img src={item.image} alt="theme image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCards;