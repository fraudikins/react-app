import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../Profile/profile.css";
import "../Characters/characters.css";
import "firebase/firestore";
import firebase from "firebase/app";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: {},
            locations: {},
            pfp: "",
        }
    }

    componentDidMount(){
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
        //let locations = [];

        firestore.collection("characters").where("creator", "==", localStorage.getItem("currentMember")).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                characters.push(doc.data());
            });
        }).then(() => {
            characters.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1)
            this.setState({characters: characters});
        });

        let docRef = firestore.collection("users").doc(localStorage.getItem("currentMember"));
        docRef.get().then(doc => {
            this.setState({pfp: doc.data().pfpurl});
        });
      
    }

    // creates a JSX element displaying all the character cards
    displayCharacterCards() {
        let charactercards = [];

        for(let i = 0; i < this.state.characters.length; i++){
            let key = this.state.characters[i].firstname + this.state.characters[i].lastname;
            charactercards.push(
                <Link className="link" to="/character" onClick={e => localStorage.setItem("currentCharacter", e.target.attributes.getNamedItem('indexkey').value)}>
                    <div className="character-card">
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

    createElements(){
        let elem;

        let displayCharacters = this.displayCharacterCards();
        elem = 
            <div>
                <div className="divpfp">
                    <img className="pfp" src={this.state.pfp} alt="profile-picture"></img>
                </div>
                <h1 className="profile-name">{localStorage.getItem("currentMember")}</h1>
                <div className="mycharacters">
                    <h2 className="profile-h2">{localStorage.getItem("currentMember") + "'s Characters"}</h2>
                </div>
                <hr className="divider"></hr>
                <div className="character-cards">
                    {displayCharacters}
                </div>
                <h2 className="profile-h2">{localStorage.getItem("currentMember") + "'s Locations"}</h2>
                <hr className="divider"></hr>
                <div className="character-cards">
                <div className="character-card"></div>
                    <div className="character-card"></div>
                    <div className="character-card"></div>
                    <div className="character-card"></div>
                </div>
            </div>
        

        return elem;
    }
    render(){
        let elem = this.createElements();
        return(
            <div className="profile-page">
                {elem}
            </div>
        );
    }

}

export default Profile;