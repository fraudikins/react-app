import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./topbar.css";

class TopBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="topbar-component">
                <ul className="topbar">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="characters">Characters</Link></li>
                    <li><Link to="locations">Locations</Link></li>
                    <li><Link to="members">Members</Link></li>
                </ul>
            </div>
        );
    }

}

export default TopBar;