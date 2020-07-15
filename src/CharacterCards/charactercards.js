import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./charactercards.css";
import "firebase/firestore";
import firebase from "firebase/app";

class CharacterCard extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyDzsf-VF7MQbpFg4tO4JAQUEznTzKQHcSw",
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
        var docRef = firestore.collection("characters").doc("Rpr6n7S6KRgisV5oTkgt");
        
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
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