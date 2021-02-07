import React from 'react';
import logo from './logo.jpg';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="header">
            <div className="nav">
                <div className="logo-align">
                    <Link to="/">
                        <img className="logo" alt="" src={logo} />
                    </Link>
                    <div className="logo-name">
                        <h2 className="logo-name2">Takshshila</h2>
                        <h3 className="logo-name3">Institute of Engineering and Technology</h3>
                    </div>
                </div>
                <div className="nav-contents">
                    <span className="call">Call us on - 0761-4026500, 2441353 </span>
                    <div className="nav-contents2">
                        <Link to="/" className="decoration">
                            <span className="individual">Home</span>
                        </Link>
                        <Link to="/about" className="decoration dropdown">
                            <span className="individual">About
                            <div className="dropdown-contents">
                                <a href="#">About Us</a>
                                <a href="#">Message From Chairman</a>
                                <a href="#">Research</a>
                                <a href="#">Infrastructure</a>
                                <a href="#">Location</a>
                                <a href="#">Contact Us</a>
                            </div>
                            </span>
                        </Link>
                        <Link to="/facilities" className="decoration dropdown">
                            <span className="individual">Vision
                            <div className="dropdown-content">
                                <a href="#">Mission</a>
                                <a href="#">Our Goals</a>
                            </div>
                            </span>
                        </Link>
                        <Link to="/admission" className="decoration dropdown">
                            <span className="individual">Courses
                            <div className="dropdown-contentss">
                                <a href="#">Bachelor of Technology</a>
                                <a href="#">Master of Technology</a>
                                <a href="#">Master of Business Administration</a>
                                <a href="#">Polytechnic Diploma</a>
                            </div>
                            </span>
                        </Link>
                        <Link to="/facilities" className="decoration dropdown">
                            <span className="individual">Admissions
                            <div className="dropdown-contents">
                                <a href="#">Admission Procedure</a>
                                <a href="#">Admission Enquiry</a>
                            </div>
                            </span>
                        </Link>
                        <Link to="/facilities" className="decoration dropdown">
                            <span className="individual">Infrastructures
                            <div className="dropdown-contents">
                                <a href="#">Laboratories</a>
                                <a href="#">Communication Lab</a>
                                <a href="#">Library</a>
                            </div>
                            </span>
                        </Link>
                        <Link to="/facilities" className="decoration dropdown">
                            <span className="individual">Placements
                            <div className="dropdown-content">
                                <a href="#">T & P Cell</a>
                                <a href="#">Placements</a>
                                <a href="#">Campus Drives</a>
                                <a href="#">Our Recruiters</a>
                            </div>
                            </span>
                        </Link>
                        <Link to="/departments" className="decoration">
                            <span className="individual">Contact Us</span>
                        </Link>

                    </div>
                </div>
            </div>
            <hr className="line" />
        </nav>

    );
}

export default Nav;