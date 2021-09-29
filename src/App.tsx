import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayerComponent from './PresentationalComponent/Organisms/PlayerComponent';
import StartComponent from './PresentationalComponent/Organisms/StartComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <StartComponent />
          </Route>
          <Route exact path="/player">
            <PlayerComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
