import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./locations.css";

class Locations extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="locations-page">
                <h1>Locations</h1>
            </div>
        );
    }

}

export default Locations;