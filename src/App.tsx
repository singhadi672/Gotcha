import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import GameCards from './components/GameCards/GameCards';
import Game from './components/Game/Game';
import {Route,Switch} from 'react-router-dom';
import {GameProvider} from './contexts/game-context';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/:id' exact component={GameCards}/>
        <GameProvider>
          <Route path='/:id/game' exact component={Game}/>
        </GameProvider>
      </Switch>
    </div>
  );
}

export default App;
