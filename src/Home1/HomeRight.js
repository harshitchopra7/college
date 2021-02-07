import React from 'react';
import './HomeRight.css';
import image from './image.jpg';

function HomeRight() {
    return (
        <div className="home_right">
            <img className="front_image" src={image} alt="" />
            <p className="chairman_msg">Message from Chairman</p>
        </div>
    )
}

export default HomeRight;
