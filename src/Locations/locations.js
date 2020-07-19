import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./locations.css";
import "firebase/firestore";
import firebase from "firebase/app";

class Locations extends Component {
    constructor(props){
        super(props);
        this.state = {
            locations: {},
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
        let locations = [];

        firestore.collection("locations").orderBy("name").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                locations.push(doc.data());
            });
        }).then(() => {
            this.setState({locations: locations});
        });
    }
    

    listLocations() {
        let locations = [];
        for(let i = 0; i < this.state.locations.length; i++){
            locations.push(
                <div className="location">
                    <h2>{this.state.locations[i].name}</h2>
                    <p>{this.state.locations[i].description}</p>
                </div>
            )
        }

        return locations;
    }

    render(){
        let locations = this.listLocations();

        return(
            <div className="locations-page">
                <h1>Locations</h1>
                <div>
                    {locations}
                </div>
            </div>
        );
    }

}

export default Locations;