import Intro from './Intro/Intro';
import HomeCards from './HomeCards/HomeCards';
import { useHome } from '../../contexts/home-context';

function Home(){

    const {display,animate,setAnimate,changeDisplay} = useHome();

    return(
        <>
         {display&&<Intro animate={animate} setAnimate={setAnimate} changeDisplay={changeDisplay}/>}
         <HomeCards/>
        </>
    )
}

export default Home;