import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./character.css";
import "firebase/firestore";
import firebase from "firebase/app";

class Character extends Component {
    constructor(props){
        super(props);
        this.state = {
            character: {},
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

        console.log(localStorage.getItem("currentCharacter"));
        let charRef = firestore.collection("characters").doc(localStorage.getItem("currentCharacter"));
        charRef.get().then(doc => {
            this.setState({character: doc.data()})
        })

    }

    render(){
        return(
            <div className="character-page">
                <h1>{this.state.character.firstname + " " + this.state.character.lastname}</h1>
                <div className="character-page-body">
                    <div className="character-info">
                        <h2 className="bio-title">Biography</h2>
                        <p>{this.state.character.biography}</p>
                        <h2 className="bio-title">Appearance</h2>
                        <p>{this.state.character.appearance}</p>
                        <h2 className="bio-title">Personality</h2>
                        <p>{this.state.character.personality}</p>
                        <h2 className="bio-title">Family</h2>
                        <p>{this.state.character.family}</p>
                        <h2 className="bio-title">Friends</h2>
                        <p>{this.state.character.friends}</p>
                        <h2 className="bio-title">Other</h2>
                        <p>{this.state.character.other}</p>
                    </div>
                    <div className="character-sidebar">
                        <img className="sidebar-image" src={this.state.character.imageurl}></img>
                        <div className="sidebar-container">
                            <p className="sidebar-element">{"First Name: "+ this.state.character.firstname}</p>
                            <p className="sidebar-element">{"Last Name: " + this.state.character.lastname}</p>
                            <p className="sidebar-element">{"Age: " + this.state.character.age}</p>
                            <p className="sidebar-element">{"Occupation: " + this.state.character.occupation}</p>
                            <p className="sidebar-element">{"Location: " + this.state.character.location}</p>
                            <p className="sidebar-element">{"Skills: " + this.state.character.skills}</p>
                            <p className="sidebar-element">{"Fears: " + this.state.character.fears}</p>
                            <p className="sidebar-element">{"Likes: " + this.state.character.likes}</p>
                            <p className="sidebar-element">{"Dislikes: " + this.state.character.dislikes}</p>
                            <p className="sidebar-element">{"Creator: " + this.state.character.creator}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Character;