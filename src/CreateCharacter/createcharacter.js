import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./createcharacter.css";
import "firebase/firestore";
import firebase from "firebase/app";

class CreateCharacter extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            personality: "",
            skills: "",
            fears: "",
            likes: "",
            dislikes: "",
            family: "",
            friends: "",
            other: "",
            imageurl: "",
            inventory: "",
            occupation: "",
            creator: "",
            location:"",
            sexuality: "",
            gender: "",
            backstory: "",
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
    }

    //handles username and password input
    inputHandler = (event) => {
        
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState({[nam]: val});
    }

    submitHandler = (event) => {
        event.preventDefault();
        const firestore = firebase.firestore();
        firestore.collection("characters").doc(this.state.firstname + this.state.lastname).set({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            personality: this.state.personality,
            skills: this.state.skills,
            fears: this.state.fears,
            likes: this.state.likes,
            dislikes: this.state.dislikes,
            family: this.state.family,
            friends: this.state.friends,
            other: this.state.other,
            imageurl: this.state.imageurl,
            inventory: firestore.doc("inventories/" + (this.state.firstname + this.state.lastname)),
            occupation: this.state.occupation,
            creator: localStorage.getItem("currentUser"),
            location: this.state.location,
            sexuality: this.state.sexuality,
            gender: this.state.gender,
            backstory: this.state.backstory,
        })

        firestore.collection("inventories").doc(this.state.firstname + this.state.lastname).set({
            items: "",
        });

        this.props.history.push('/profile');
    }

    //render
    render(){
        return(
            <div className="create-character-page">
                <h1>Create New Character</h1>
                <form className="character-form" onSubmit={this.submitHandler}>
                    <div className="name-editor">
                        <label className="inputOO">
                            First name:
                            <input type="text" className="nameinput" name="firstname" maxlength="30" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <div className="lastname-editor">
                        <label className="inputOO">
                            Last name: 
                            <br></br>
                            <input type="text" className="nameinput" name="lastname" maxlength="30" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <div className="age-editor">
                        <label className="inputOO">
                            Age:
                            <input type="number" className="nameinput" name="age" min="0" max="10000" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <div className="gender-editor">
                        <label className="inputOO">
                            Gender:
                            <input type="text" className="nameinput" name="gender" maxLength="100" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <div className="sexuality-editor">
                        <label className="inputOO">
                            Sexuality:
                            <input type="text" className="nameinput" name="sexuality" maxLength="100" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <div className="occupation-editor">
                        <label className="inputOO">
                            Occupation:
                            <input type="text" className="nameinput" name="occupation" maxLength="100" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <div className="location-editor">
                        <label className="inputOO">
                            Select location:
                            <select name="location" className="location-input" onChange={this.inputHandlerSubject}>
                                <option disabled selected value> -- select an option -- </option>
                                <option>Hillesden</option>
                                <option>Kensington</option>
                                <option>Northfield</option>
                            </select>
                        </label>
                    </div>
                    <div className="skills-editor">
                        <label className="inputOO">
                            Skills:
                            <textarea type="text" className="nameinput" name="skills" maxlength="2500" rows="4" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="fears-editor">
                        <label className="inputOO">
                            Fears:
                            <textarea type="text" className="nameinput" name="fears" maxlength="2500" rows="4" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="likes-editor">
                        <label className="inputOO">
                            Likes:
                            <textarea type="text" className="nameinput" name="likes" maxlength="2500" rows="4" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="dislikes-editor">
                        <label className="inputOO">
                            Dislikes:
                            <textarea type="text" className="nameinput" name="dislikes" maxlength="2500" rows="4" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="biography-editor">
                        <label className="inputOO">
                            Backstory:
                            <textarea wrap="hard" type="text" className="nameinput" name="backstory" maxlength="5000" rows="8"  onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="personality-editor">
                        <label className="inputOO"> 
                            Personality:
                            <textarea wrap="hard" type="text" className="nameinput" name="personality" maxlength="5000" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="image-editor">
                        <label className="inputOO">
                            FC link:
                            <br></br>
                            <input type="text" className="nameinput" name="imageurl" onChange={this.inputHandler} required></input>
                        </label>
                    </div>
                    <h2>Optional section</h2>
                    <div className="family-editor">
                        <label className="inputOO">
                            Family:
                            <textarea wrap="hard" type="text" className="nameinput" name="family" maxlength="5000" rows="8" onChange={this.inputHandler}></textarea>
                        </label>
                    </div>
                    <div className="friends-editor">
                        <label className="inputOO">
                            Friends:
                            <textarea wrap="hard" type="text" className="nameinput" name="friends" maxlength="5000" rows="8" onChange={this.inputHandler}></textarea>
                        </label>
                    </div>
                    <div className="other-editor">
                        <label className="inputOO">
                            Other:
                            <textarea wrap="hard" type="text" className="nameinput" name="other" maxlength="5000" rows="8" onChange={this.inputHandler}></textarea>
                        </label>
                    </div>
                    <div className="savecancel">
                        <Link to="/profile">
                            <button className="buttonsave" type="submit" onClick={this.submitHandler}>Save</button>
                        </Link>
                        <Link to="/profile">
                            <button className="buttoncancel" type="reset">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateCharacter;