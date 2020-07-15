import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./characters.css";
import CharacterCard from "../CharacterCards/charactercards";

class Characters extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="characters-page">
                <h1>Characters</h1>
                <CharacterCard/>
            </div>
        );
    }
    
}

export default Characters;