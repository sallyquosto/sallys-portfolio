import React from "react";
import { SocialIcon } from "react-social-icons";
import { HiArrowUp } from 'react-icons/hi';

export default function Footer() {
    return (
        <div className="footer">
                <div className="my-icons">
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
                    <SocialIcon 
                    url="https://www.snapchat.com/add/sallyquosto" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width: 35}} 
                    />
                </div>
                <p className="pt-3 text-center">Copyright&copy; {new Date().getFullYear()}&nbsp; <br />
                Created by Sally Quosto | All Rights Reserved </p>
            
            <div className="pageup-arrow animation">
				<a href="#">
				    <HiArrowUp size="3em" color="black" />
				</a>
            </div>
        </div>
    )
}