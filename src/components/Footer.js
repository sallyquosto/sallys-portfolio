import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <div className="py-3 px-3 my-3">
                    <SocialIcon 
                    url="https://github.com/sallyquosto" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    />
                    <SocialIcon 
                    url="https://www.linkedin.com/in/sally-quosto-97785a174/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    />
                    <SocialIcon 
                    url="https://instagram.com/_sallykq?igshid=1uabig2a1ew8e" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    />

                </div>
    )
}