import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./createcharacter.css";

class CreateCharacter extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            biogrpahy: "",
            appearance: "",
            personality: "",
            skills: "",
            fears: "",
            likes: "",
            dislikes: "",
            family: "",
            friends: "",
        }
    }

    //handles username and password input
    inputHandler = (event) => {
        /*
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState(nam, val);*/
    }

    submitHandler() {

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
                    <div className="biography-editor">
                        <label className="inputOO">
                            Biography:
                            <textarea type="text" className="nameinput" name="biography" maxlength="5000" rows="8"  onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="appearance-editor">
                        <label className="inputOO">
                            Appearance:
                            <textarea type="text" className="nameinput" name="appearance" maxlength="5000" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="personality-editor">
                        <label className="inputOO"> 
                            Personality:
                            <textarea type="text" className="nameinput" name="personality" maxlength="5000" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="skills-editor">
                        <label className="inputOO">
                            Skills:
                            <textarea type="text" className="nameinput" name="skills" maxlength="2500" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="fears-editor">
                        <label className="inputOO">
                            Fears:
                            <textarea type="text" className="nameinput" name="fears" maxlength="2500" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="likes-editor">
                        <label className="inputOO">
                            Likes:
                            <textarea type="text" className="nameinput" name="likes" maxlength="2500" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                    <div className="dislikes-editor">
                        <label className="inputOO">
                            Dislikes:
                            <textarea type="text" className="nameinput" name="dislikes" maxlength="2500" rows="8" onChange={this.inputHandler} required></textarea>
                        </label>
                    </div>
                   
                    <div className="family-editor">
                        <label className="inputOO">
                            Family:
                            <textarea type="text" className="nameinput" name="family" maxlength="5000" rows="8" onChange={this.inputHandler}></textarea>
                        </label>
                    </div>
                    <div className="friends-editor">
                        <label className="inputOO">
                            Friends:
                            <textarea type="text" className="nameinput" name="friends" maxlength="5000" rows="8" onChange={this.inputHandler}></textarea>
                        </label>
                    </div>
                    <div className="other-editor">
                        <label className="inputOO">
                            Other:
                            <textarea type="text" className="nameinput" name="other" maxlength="5000" rows="8" onChange={this.inputHandler}></textarea>
                        </label>
                    </div>
                    <div className="character-image">
                        <label className="inputOO">
                            Profile picture image URL:
                            <br></br>
                            <input type="text" className="nameinput" name="characterimage" onChange={this.inputHandler}></input>
                        </label>
                    </div>
                    <div className="savecancel">
                        <button className="buttonsave" type="submit" onClick={this.submitHandler}>Save</button>
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