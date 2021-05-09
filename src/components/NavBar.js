import React from "react";
import { NavLink } from "react-router-dom";
// import { SketchPicker } from 'react-color';


export default function NavBar() {
    // return <h1>NavBar Works!</h1>
    return (
        <header position="static" style={{background: "#041d2b"}}>
            <div className="container mx-auto fles justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    activeClassName="text-white"
                    exact className="inline-flex items-center py-6 px-3 mr-4 text-blue-900 hover:text-blue-400 text-4xl font-bold font tracking-widest"
                    >
                        Sally.
                    </NavLink>
                    <NavLink
                    to="/skills"
                    activeClassName="bg-yellow-700" 
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-800 hover:text-blue-400"
                    >
                        Skills.
                    </NavLink>
                    <NavLink 
                    to="/project"
                    activeClassName="bg-yellow-700"
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-blue-800 hover:text-blue-400"
                    >
                        Projects.
                    </NavLink>
                    <NavLink 
                    to="/about"
                    activeClassName="bg-yellow-700"
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