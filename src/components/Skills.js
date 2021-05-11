import React from "react";
import { FaReact } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiGnubash } from 'react-icons/si';
import { SiMaterialUi } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';


const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">
                <div className="container">
                    <h1>My Skills</h1>
                    <div className="row grid">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <FaReact size={82} style={{color: "#61DBFB"}}/>
                                <h3>React</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <SiJavascript size={82} style={{color: "#f0db4f"}}/>
                                <h3>JavaSccript</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <FaNpm size={82} style={{color: "red", background: "white"}}/>
                                <h3>NPM</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <SiTypescript size={82} style={{color: "#007acc", background: "white"}}/>
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <FaHtml5 size={82} style={{color: "red", background: "white"}}/>
                                <h3>HTML5</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <FaCss3Alt size={82} style={{color: "2965f1", background: "white"}}/>
                                <h3>CSS3</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <SiPostgresql size={82} style={{color: "#008bb9"}}/>
                                <h3>SQL</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <SiMaterialUi size={82} style={{color: "#007acc"}}/>
                                <h3>Material Ui</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <FaGitAlt size={82} style={{color: "#F1502F"}}/>
                                <h3>Git</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <SiGnubash size={82} style={{color: "white"}}/>
                                <h3>Bash</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <AiOutlineApi size={82} style={{color: "lightblue"}}/>
                                <h3>API</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <FaNodeJs size={82} style={{color: "#3C873A"}}/>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <SiAngular size={82} style={{color: "#dd1b16", background: "white"}}/>
                                <h3>Angular</h3>
                            </div>
                        </div>
                        {/* <div className="col-md-3 col-sm-6">
                            <div className="box">
                                < size={82} style={{color: ""}}/>
                                <h3></h3>
                            </div>
                        </div> */}
                        <h6>To Be Continued...</h6>
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default Skills