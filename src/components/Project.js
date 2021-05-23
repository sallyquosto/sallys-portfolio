import React from "react";
import { BiError } from 'react-icons/bi';

const Project = () => {
    return (
        <div className="projects">
            <div className="py-5">
                <div className="column">
                    <div className="my-projects">
                        <h1>My Projects</h1>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <BiError size={82} style={{color: "red"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        <h1>Contributions</h1>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <BiError size={82} style={{color: "red"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;