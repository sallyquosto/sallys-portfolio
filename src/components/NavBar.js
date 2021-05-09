import React from "react";
import logo from "../logo.png";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            {/* <div className=".container"> */}
            <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse"   
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#428cd4"}}/>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home.<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Skills.</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects.</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Me.</a>
                    </li>
                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}

export default NavBar
