import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./topbar.css";
import "firebase/firestore";
import firebase from "firebase/app";
require('firebase/auth')

class TopBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: false,
        }
    }

    setIsLoggedIn() {
        var user = localStorage.getItem("currentUser");

        if (user) {
            //user is signed in
            this.setState({
                isLoggedIn: true,
            })
        } else {
            //no user is signed in
            this.setState({
                isLoggedIn: false,
            })
        }

        console.log("In func" + this.state.isLoggedIn);
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
    }

    createSignButton() {
        let signElem;
        var user = localStorage.getItem("currentUser");

        if (user) {
            // User is signed in.
            signElem = 
                    <button className="signout-btn" onClick={this.signout}>Sign Out</button>
        } else {
            // No user is signed in.
            signElem =
                <Link to="/sign-in">
                    <button className="sign-btn">Sign In</button>
                </Link>;
        }
        
        return signElem;
    }

    signout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUserPfp");
        window.location.reload();
    }

    createProfileBtn(){
        let profileBtn;
        var user = localStorage.getItem("currentUser");

        if (user) {
            // User is signed in.
            profileBtn = <li><Link to="profile">Profile</Link></li>;
        } else {
            // No user is signed in.
            profileBtn = <p></p>
        }
        
        return profileBtn;
    }

    render(){
        let signbtn = this.createSignButton();
        let profilebtn = this.createProfileBtn();

        return(
            <div className="topbar-component">
                <ul className="topbar">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="characters">Characters</Link></li>
                    <li><Link to="locations">Locations</Link></li>
                    <li><Link to="members">Members</Link></li>
                    {profilebtn}
                </ul>
                {signbtn}
            </div>
        );
    }

}

export default TopBar;