import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./home.css";
import TopBar from "../TopBar/topbar";

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-page">
                <TopBar/>
                <h1>Rot and Ruin</h1>
            </div>
        );
    }

}

export default Home;