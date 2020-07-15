import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./charactercards.css";
import "firebase/firestore";
import firebase from "firebase/app";

class CharacterCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="character-cards">
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                </div>
                <div className="pages">
                    <button className="page-button">1</button>
                </div>
            </div>
        );
    }

}

export default CharacterCard;