import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./members.css";
import "firebase/firestore";
import firebase from "firebase/app";

class Members extends Component {
    constructor(props){
        super(props);
        this.state = {
            members: {},
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
        let members = [];

        firestore.collection("users").orderBy("username").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                members.push(doc.data());
            });
        }).then(() => {
            this.setState({members: members});
        });
    }

    // creates a JSX element displaying all the members/users
    displayMembers() {
        let members = [];

        for(let i = 0; i < this.state.members.length; i++){
            let key = this.state.members[i].username;
            members.push(
                <Link className="link" to="/member" onClick={e => localStorage.setItem("currentMember", e.target.attributes.getNamedItem('indexkey').value)}>
                    <div className="member">
                        <div indexkey={key} className="divpfp">
                            <img indexkey={key} className="pfp" src={this.state.members[i].pfpurl} alt="profile-picture"></img>
                        </div>
                        <h2 indexkey={key} className="username">{this.state.members[i].username}</h2>
                    </div>
                </Link>
            )
        }

        return members;
    }

    render(){
        let members = this.displayMembers();
        return(
            <div className="members-page">
                <h1>Members</h1>
                <div className="display-members">
                    {members}
                </div>
            </div>
        );
    }

}

export default Members;