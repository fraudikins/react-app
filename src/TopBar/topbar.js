import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./topbar.css";

class TopBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul className="topbar">
                    <li><Link href="home">Home</Link></li>
                    <li><Link href="characters">Characters</Link></li>
                    <li><Link href="members">Members</Link></li>
                </ul>
            </div>
        );
    }

}

export default TopBar;