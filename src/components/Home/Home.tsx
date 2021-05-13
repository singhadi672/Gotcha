import React,{useState} from 'react';
import Intro from './Intro/Intro';
import HomeCards from './HomeCards/HomeCards';

function Home(){

    const [animate,setAnimate] = useState(true);
    const [display,setDisplay] = useState(false);
    
    function changeDisplay(){
        setTimeout(() => {
             setDisplay(false);
        }, 500);
    }

    return(
        <>
         {display&&<Intro animate={animate} setAnimate={setAnimate} changeDisplay={changeDisplay}/>}
         <HomeCards/>
        </>
    )
}

export default Home;