import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Character from "./Character/character";
import Characters from "./Characters/characters";
import Members from "./Members/members";
import Home from "./Home/home"; 
import Locations from "./Locations/locations";
import Profile from "./Profile/profile";
import SignIn from "./SignIn/sign-in";
import TopBar from "./TopBar/topbar";

function App() {
  let exactPath = <Route exact path="/" component={Home} />;

  return (
    <div className="App">
      <header className="App-header">
        <div class="fixed-bg">
          <BrowserRouter>
            <TopBar/>
            {exactPath}
            <Route path="/character" component={Character}/>
            <Route path="/characters" component={Characters}/>
            <Route path="/members" component={Members}/>
            <Route path="/locations" component={Locations}/>
            <Route path="/home" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/sign-in" component={SignIn}/>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
