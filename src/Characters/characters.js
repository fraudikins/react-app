import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./characters.css";
import "firebase/firestore";
import firebase from "firebase/app";

class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: {},
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: process.env.firebaseAPIKey,
            authDomain: "rot-and-ruin.firebaseapp.com",
            databaseURL: "https://rot-and-ruin.firebaseio.com",
            projectId: "rot-and-ruin",
            storageBucket: "rot-and-ruin.appspot.com",
            messagingSenderId: "396015944750",
            appId: "1:396015944750:web:cea747a8ef6c9eecab0bbf",
            measurementId: "G-HVKE37VY61"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const firestore = firebase.firestore();
        let characters = [];

        firestore.collection("characters").orderBy("firstname").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                characters.push(doc.data());
            });
        }).then(() => {
            this.setState({characters: characters});
        });
    }

    // creates a JSX element displaying all the character cards
    displayCharacterCards() {
        let charactercards = [];

        for(let i = 0; i < this.state.characters.length; i++){
            let key = this.state.characters[i].firstname + this.state.characters[i].lastname;
            charactercards.push(
                <Link className="link" to="/character" onClick={e => localStorage.setItem("currentCharacter", e.target.attributes.getNamedItem('indexkey').value)}>
                    <div indexkey={key} className="character-card">
                        <img indexkey={key} className="card-image" src={this.state.characters[i].imageurl}></img>
                        <div indexkey={key} className="card-info">
                            <p indexkey={key} className="card-name">{this.state.characters[i].firstname + " " + this.state.characters[i].lastname}</p>
                            <p indexkey={key} className="pfix">{"Age: " + this.state.characters[i].age}</p>
                            <p indexkey={key} className="pfix">{"Occupation: " + this.state.characters[i].occupation}</p>
                            <p indexkey={key} className="pfix">{"Backstory: " + this.state.characters[i].backstory}</p>
                        </div>
                    </div>
                </Link>
            )
        }

        return charactercards;
    }

    render(){
        let charactercards = this.displayCharacterCards();
        console.log(charactercards);
        console.log(this.state.characters);

        return(
            <div className="characters-page">
                <h1>Characters</h1>
                <div className="character-cards">
                    {charactercards}
                </div>
            </div>
        );
    }
    
}

export default Characters;