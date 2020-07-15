import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./members.css";

class Members extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="members-page">
                <h1>Members</h1>
            </div>
        );
    }

}

export default Members;