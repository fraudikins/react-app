import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./profile.css";
import "../CharacterCards/charactercards.css";
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
        let characters = [];
        //let locations = [];
        let currentUser = localStorage.getItem("currentUser");

        /*
        firestore.collection("characters").where("creator", "==", currentUser).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                characters.push(doc.data());
            });
        }).then(() => {
            characters.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1)
            this.setState({characters: characters});
        });*/

        /*
        firestore.collection("locations").where("creator", "==", currentUser).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                locations.push(doc.data());
            });
        }).then(() => {
            locations.sort((a, b) => (a.name > b.name) ? 1 : -1)
            this.setState({locations: locations});
        });*/
        
        /*
        firestore.collection("users").where("username", "==", currentUser).get().then(function(doc) {
            doc.data().forEach(function(doc) {
                characters.push(doc.data());
            });
        }).then(() => {
            characters.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1)
            this.setState({characters: characters});
        });*/
    }

    createElements(){
        let elem;
        if(localStorage.getItem("currentUser")){
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
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
                        <div className="character-card"></div>
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