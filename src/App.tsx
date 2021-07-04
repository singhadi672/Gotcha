import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import GameCards from './components/GameCards/GameCards';
import GameSinglePlayer from './components/Game/SinglePlayer/GameSinglePlayer';
import GameMultiPlayer from './components/Game/MultiPlayer/GameMultiPlayer';
import {Route,Switch} from 'react-router-dom';
import {GameProvider} from './contexts/game-context';
import { MultiplayerProvider } from './contexts/multiplayer-context';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/:id' exact component={GameCards}/>
        <GameProvider>
          <Route path='/:id/game-singleplayer' exact component={GameSinglePlayer}/>
          <MultiplayerProvider>
            <Route path='/:id/game-multiplayer' exact component={GameMultiPlayer}/>
          </MultiplayerProvider>
        </GameProvider>
      </Switch>
    </div>
  );
}

export default App;
