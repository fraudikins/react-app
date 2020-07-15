import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./characters.css";
//import firestore from '@react-native-firebase/firestore';

class Characters extends Component {
    constructor(props){
        super(props);
    }

    /*componentDidMount(){
        
        firestore().collection("characters").doc("Rpr6n7S6KRgisV5oTkgt").then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }*/

    render(){
        return(
            <div className="characters-page">
                <h1>Characters</h1>
            </div>
        );
    }
    
}

export default Characters;