import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import MyIMG from "../IMG/IMG_1158.PNG";


const Home = () => {
    return (
        <div className="home-page">
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
                    <ReactTypingEffect text={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra facilisis neque, vitae malesuada erat egestas ac. Aenean elit mi, sollicitudin vel mi at, cursus accumsan nunc. Fusce nec ipsum a felis facilisis porta at sed neque."]}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home