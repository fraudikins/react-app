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
                        <div className="character-card">
                            <div>
                                <img className="card-image" src="https://media1.s-nbcnews.com/j/MSNBC/Components/Video/__NEW/a_orig_homeless_marvin_160309__606123.focal-760x428.jpg"></img>
                            </div>
                            <p className="card-name">Gustaf Andersson</p>
                            <p className="card-info">Age: 60</p>
                            <p className="card-info">Occupation: Unemployed</p>
                            <p className="card-info">Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
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