import React from 'react';
import './Departments.css';
import cs from './cs.jpg';
import ee from './ee.jpg';
import me from './me.jpg';
import ce from './ce.jpg';

function Departments() {
    return (
        <div className="tc">
            <h1>Departments</h1>
            <p className="f2 underline i pa2">Department of Computer Science Engineering</p>
            <img alt="" src={cs} />
            <p className="f2 underline i pa2">Department of Electrical & Electronics Engineering</p>
            <img alt="" src={ee} />
            <p className="f2 underline i pa2">Department of Mechanical Engineering</p>
            <img alt="" src={me} />
            <p className="f2 underline i pa2">Department of Civil Engineering</p>
            <img alt="" src={ce} />
        </div>
    );
}
export default Departments;