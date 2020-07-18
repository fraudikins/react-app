import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./character.css";

class Character extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="character-page">
                <h1>Gustaf Andersson</h1>
                <div className="character-page-body">
                    <div className="character-info">
                        <h2 className="bio-title">Biography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="character-sidebar">
                        <img className="sidebar-image" src="https://media1.s-nbcnews.com/j/MSNBC/Components/Video/__NEW/a_orig_homeless_marvin_160309__606123.focal-760x428.jpg"></img>
                        <div className="sidebar-container">
                            <p className="sidebar-element">First Name: Gustaf</p>
                            <p className="sidebar-element">Last Name: Andersson</p>
                            <p className="sidebar-element">Age: 60</p>
                            <p className="sidebar-element">Nationality:</p>
                            <p className="sidebar-element">Occupation:</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Character;