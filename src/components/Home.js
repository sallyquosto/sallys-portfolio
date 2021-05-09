import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import webDev from "../web-dev.png";


export default function Home() {
    return (
        <div className="home-page">
            <div className="main">
                <h5>Hello, my name is</h5>
                <h2>Sally Quosto.</h2>
                <img className="pic" src={webDev} alt="logo..."/>
                <ReactTypingEffect text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra facilisis neque, vitae malesuada erat egestas ac. Aenean elit mi, sollicitudin vel mi at, cursus accumsan nunc. Fusce nec ipsum a felis facilisis porta at sed neque."]}/>
                
            </div>
        </div>
    )
}