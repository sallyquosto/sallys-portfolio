import React from "react";
import logo from "../IMG/logo.png";
import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
            
            <button className="navbar-toggler shadow-none" type="button" data-toggle="collapse"   
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#428cd4"}}/>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" offset={-100} className="nav-link" href="#">Home.<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="skills" offset={-100} className="nav-link" href="#">Skills.</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="project" offset={-100} className="nav-link" href="#">Projects.</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#">Contact Me.</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
