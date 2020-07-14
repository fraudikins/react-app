import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Character from "./Character/character";
import Characters from "./Characters/characters";
import Members from "./Members/members";
import Profile from "./Profile/profile";
import Home from "./Home/home"; 

function App() {
  let exactPath = <Route exact path="/" component={Home} />;

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {exactPath}
          <Route path="/character" component={Character}/>
          <Route path="/characters" component={Characters}/>
          <Route path="/members" component={Members}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/home" component={Home}/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
