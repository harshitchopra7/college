import React from 'react';
import './Home1.css';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

function Home1() {
    return (
        <div className="home1">
            <div className="home_left">
                <HomeLeft />
            </div>
            <div className="home_right">
                <HomeRight />
            </div>
        </div>
    )
}

export default Home1;
