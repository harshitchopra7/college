import React from 'react';
import './Footer1.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import gmail from './gmail.png';

function Footer1() {
    return (
        <div className="footer1">
            <div className="footer1_align">
                <div className="footer1_elements">
                    <p className="footer1_heading">Downloads</p>
                    <div className="list">
                        <li> Degree Form</li>
                        <li> Duplicate Degree/Marksheet</li>
                        <li> Department Clearance Form</li>
                        <li> College Leaving</li>
                        <li> Job Application Form</li>
                        <li> Admission Form</li>
                    </div>
                </div>
                <div className="footer1_elements">
                    <p className="footer1_heading">About Takshshila</p>
                    <div className="list">
                        <li> About Us</li>
                        <li> Infrastructure</li>
                        <li> Location</li>
                        <li> Contact Us</li>
                        <li> Mandatory Disclosure</li>
                    </div>
                </div>
                <div className="footer1_elements">
                    <p className="footer1_heading">Quick Links</p>
                    <div className="list">
                        <li> Media Centre</li>
                        <li> Takshshila News</li>
                        <li> Photo Gallery</li>
                        <li> Library</li>
                    </div>
                </div>
                <div className="footer1_elements">
                    <p className="footer1_heading">Institution Links</p> 
                    <div className="list">
                        <li> RNK Educational Society</li>
                        <li> Takshshila ITI</li>
                        <li> Mount Litera Zee School</li>
                        <li> International Desidn Academy</li>
                    </div>
                </div>
                <div className="footer1_elements">
                    <p className="footer1_heading">Connect With Us</p>
                    <div className="connect_logos"> 
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
            <div className="made">
                <p>Made by Harshit Chopra CS 3rd Year</p>
                <div>
                    <a href="https://www.linkedin.com/in/harshit-chopra-b98a94189/"><img className="made_logos" src={linkedin} alt="" /></a>
                    <a href="mailto:chopraharshit2000@gmail.com"><img className="made_logos" src={gmail} alt="" /></a>
                </div>
            </div>    
            <hr className="hr" />
            <p className="copyright">Copyright © Takshshila Institute of Engineering & Technology, 2010 - 2012. All Rights Reserved.</p>
        </div>
    )
}

export default Footer1;
