import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    // return <h1>NavBar Works!</h1>
    return (
        <header className="bg-white-600">
            <div className="container mx-auto fles justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    activeClassName="text-white"
                    exact className="inline-flex items-center py-6 px-3 mr-4 text-red-300 hover:text-pink-800 text-4xl font-bold font tracking-widest"
                    >
                        Sally.
                    </NavLink>
                    <NavLink 
                    to="/skills"
                    activeClassName="text-red-100 bg-red-700"
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-400 hover:text-pink-800"
                    >
                        Skills.
                    </NavLink>
                    <NavLink 
                    to="/project"
                    activeClassName="text-red-100 bg-red-700"
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-400 hover:text-pink-800"
                    >
                        Projects.
                    </NavLink>
                    <NavLink 
                    to="/about"
                    activeClassName="text-red-100 bg-red-700"
                    exact className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-400 hover:text-pink-800"
                    >
                        About Me.
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}