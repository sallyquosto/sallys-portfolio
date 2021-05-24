import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import MyIMG from "../IMG/IMG_1158.jpg";


const Home = () => {
    return (
        <div id="home" className="home-page">
            <div className="info">
                {/* <div className="na"> */}
                    <div className="photo-wrap">
                        <img className="my-img" src={MyIMG} alt="Authors image..."/>
                    </div>
                {/* </div> */}
                <div className="main">
                    <h5>Hello, my name is</h5>
                    <h2>Sally Quosto.</h2>
                    <h4>&lt;Web Developer/&gt;</h4>
                    
                </div>
                <div className="typing">
                    <ReactTypingEffect speed={100} eraseSpeed={100} text={["My passion is developing webpages. I'm fluent in HTML, CSS, and JavaScript. Working for an organization where I can contribute to the tech world or simply an end-user by creating page structures, keeping the design up-to-date, responsive, and satisfying for the user is a dream of mine, but it takes a lot of creativity and constant learning which I am up for!"]}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home