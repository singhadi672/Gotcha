import React, { useState } from 'react';
import './intro.css';
import {IntroProp} from '../Home.type';


function Intro({animate,setAnimate,changeDisplay}:IntroProp){

    return (
        <div className="home">
            <section className={animate?'home-section home-left-active':'home-section home-left'}>
                <header className='header'>
                    <h1 className="header-logo">
                        GOTCHA!
                    </h1>
                    <h3 className="header-desc">
                        OUTWIT YOUR FRIENDS!
                    </h3>
                </header>
            </section>
            <section className={animate?'home-section home-right-active':'home-section home-right'}>
                <div className="game-description">
                    <div className="description">
                        <h1>What is Gotcha!</h1>
                        <p>Gotcha! is a single/multiplayer game involving various quizes/activities that revolve around a theme... just pick your favorite one, invite your friends and see who is the ultimate Gotcha! king!!!</p>
                        <h3>Get your game faces ready!</h3>
                    </div>
                    <div className="game-btn">
                        <button onClick={()=>{
                            setAnimate(true);
                            changeDisplay()}}
                        >
                            Play Game!
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro;