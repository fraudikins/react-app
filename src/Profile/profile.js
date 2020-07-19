import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./profile.css";
import "../Characters/characters.css";
import "firebase/firestore";
import firebase from "firebase/app";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            myCharacters: {},
            myLocations: {},
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

        firestore.collection("characters").where("creator", "==", localStorage.getItem("currentUser")).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                characters.push(doc.data());
            });
        }).then(() => {
            characters.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1)
            this.setState({myCharacters: characters});
        });
    }

    // creates a JSX element displaying all the character cards
    displayMyCharacterCards() {
        let charactercards = [];

        for(let i = 0; i < this.state.myCharacters.length; i++){
            let key = this.state.myCharacters[i].firstname + this.state.myCharacters[i].lastname;
            charactercards.push(
                <Link className="link" to="/character" onClick={e => localStorage.setItem("currentCharacter", e.target.attributes.getNamedItem('indexkey').value)}>
                    <div className="character-card">
                        <img indexkey={key} className="card-image" src={this.state.myCharacters[i].imageurl}></img>
                        <div indexkey={key} className="card-info">
                            <p indexkey={key} className="card-name">{this.state.myCharacters[i].firstname + " " + this.state.myCharacters[i].lastname}</p>
                            <p indexkey={key} className="pfix">{"Age: " + this.state.myCharacters[i].age}</p>
                            <p indexkey={key} className="pfix">{"Occupation: " + this.state.myCharacters[i].occupation}</p>
                            <p indexkey={key} className="pfix">{"Backstory: " + this.state.myCharacters[i].backstory}</p>
                        </div>
                    </div>
                </Link>
            )
        }

        return charactercards;
    }

    createElements(){
        let elem;

        if(localStorage.getItem("currentUser")){
            let displaymycharacters = this.displayMyCharacterCards();
            elem = 
                <div>
                    <div className="divpfp">
                        <img className="pfp" src={localStorage.getItem("currentUserPfp")} alt="profile-picture"></img>
                    </div>
                    <h1 className="profile-name">{localStorage.getItem("currentUser")}</h1>
                    <div className="mycharacters">
                        <h2 className="profile-h2">My Characters</h2>
                        <div className="a-edit"> 
                            <Link to="/createcharacter" className="EditButton">+</Link>
                        </div> 
                    </div>
                    <hr className="divider"></hr>
                    <div className="character-cards">
                        {displaymycharacters}
                    </div>
                    <h2 className="profile-h2">My Locations</h2>
                    <hr className="divider"></hr>
                    <div className="character-cards">
                    <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                    </div>
                </div>
        } else {
            elem = <h1>You're signed out</h1>;
        }

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