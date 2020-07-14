import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./welcome.css";

class Welcome extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Rot and Ruin</h1>
            </div>
        );
    }

}

export default Welcome;