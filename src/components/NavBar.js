import React from "react";
import { NavLink } from "react-router-dom";
// import { SketchPicker } from 'react-color';


export default function NavBar() {
    // return <h1>NavBar Works!</h1>
    return (
        <header position="static" style={{background: "#041d2b"}}>
            <div className="container mx-auto fles justify-between">
                <nav className="flex">
                    <NavLink style={{color: "#ea4492"}}
                    to="/" 
                    activeClassName="text-white"
                    exact className="inline-flex items-center py-6 px-3 mr-4 text-blue-900 hover:text-blue-400 text-4xl font-bold font tracking-widest"
                    >
                        Sally.
                    </NavLink>
                    <NavLink style={{color: "#ea4492"}}
                    to="/skills"
                    activeClassName="text-blue-100 bg-blue-500" 
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-800 hover:text-blue-400"
                    >
                        Skills.
                    </NavLink>
                    <NavLink style={{color: "#ea4492"}}
                    to="/project"
                    activeClassName="text-blue-100 bg-blue-500"
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-800 hover:text-blue-400"
                    >
                        Projects.
                    </NavLink>
                    <NavLink style={{color: "#ea4492"}}
                    to="/about"
                    activeClassName="text-blue-100 bg-blue-500"
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-800 hover:text-blue-400"
                    >
                        About Me.
                    </NavLink>
                </nav>
                <div>

                </div>
            </div>
        </header>
    )
}