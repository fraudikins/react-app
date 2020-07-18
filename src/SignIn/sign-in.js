import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./sign-in.css";
import "firebase/firestore";
import firebase from "firebase/app";
import TopBar from "../TopBar/topbar";

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            help: "",
        }
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
    }

    //handles username and password input
    inputHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setset(nam, val);
    }

    //setState helper function
    setset(nam, val){
        this.setState({ [nam]: val }, () => {
            console.log(this.state.password)
        });
    }

    //handles submission of login form
    submitHandler = (event) => {
        event.preventDefault();
        console.log('onFormSubmit : ', this); 
        let pass = this.state.password;
        
        const firestore = firebase.firestore();
        var docRef = firestore.collection("users").doc(this.state.username);
        
        console.log(docRef.get().username)

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data().password)
                if(pass == doc.data().password){
                    console.log("logged in")
                    localStorage.setItem("currentUser", doc.data().username);
                } else {
                    //failed to log in
                    console.log("log in failed")
                    alert("The password was incorrect.");
                }
            } else {
                console.log("nay");
                alert("This user does not exist.");
            }
        })

        if(localStorage.getItem("currentUser")){
            this.props.history.push('/profile')
            window.location.reload();
        }
        
    }

    render() {
        return(
            <div className="sign-in-page">
                <h1>Sign In</h1>
                <p className="sign-in-p">Temporary Sign In</p>
                <div className="logg">
                    <div className="logins">
                        <div className="input-container">
                            <label>
                                Username:
                                <input type="text" className="input" name="username" maxlength="30" onChange={this.inputHandler}></input>
                            </label>
                        </div>
                        <div className="input-container">
                            <label>
                                Password:
                                <input type="password" className="input-pass" name="password" maxlength="30" onChange={this.inputHandler}></input>
                            </label>
                        </div>
                        <button className="loginBtn" type="submit" onClick={this.submitHandler}>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignIn;