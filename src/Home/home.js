import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./home.css";

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home-page">
                <h1>Rot and Ruin</h1>
                <p className="passie">It’s just a normal day; birds are chirping, cars are driving around, and the sun is shining. Suddenly, the nation feels like it’s coming to a standstill. News companies are frantically publishing headlines about a “zombie virus” that’s been spotted in Europe. Supposedly, it’s incredibly dangerous. For now, though it’s just rumors. Life continues as normal for a while, since there’s nothing anyone can do based on the vague speculations being reported. That all changes when two scientists from Britain release a public statement. The “zombie virus” is real, and it’s started spreading beyond their control and beyond their monitoring. Those afflicted with the virus stop caring about themselves, becoming agents of the virus and existing only for the purpose of spreading it. The zombies look fairly normal, for now, but act strangely. The scientists end their message with a harrowing warning. It could be anywhere, so do your best to keep yourself safe and do not come into contact with any zombies. The disease has already started affecting the scientists studying it and major cities will soon be overrun with zombies. It’s up to you to save yourselves and perhaps the rest of the world…</p>
            </div>
        );
    }

}

export default Home;