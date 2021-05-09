import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    // return <h1>NavBar Works!</h1>
    return (
        <header>
            <div className="container mx-auto fles justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/"
                    exact className="inline-flex items-center py-6 px-3 mr-4"
                    >
                        Sally.
                    </NavLink>
                    <NavLink
                    to="/skills"
                    exact className="inline-flex items-center py-3 px-3 mr-6"
                    >
                        Skills.
                    </NavLink>
                    <NavLink 
                    to="/project"
                    exact className="inline-flex items-center py-3 px-3 mr-6"
                    >
                        Projects.
                    </NavLink>
                    <NavLink 
                    to="/about"
                    exact className="inline-flex items-center py-3 px-3 mr-6"
                    >
                        About Me.
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}