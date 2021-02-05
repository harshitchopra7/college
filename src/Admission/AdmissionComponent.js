import React from 'react';
import './AdmissionComponent.css';

function AdmissionComponent({ duration, b1, b2, b3, b4, description }) {
    return (
        <div>
            <p className="f3 tc">Duration: {duration} years</p>
            <div className="align">
            <div className="left tc">
                <h2>Streams</h2>
                <p className="fon">{b1}</p>
                <p className="fon">{b2}</p>
                <p className="fon">{b3}</p>
                <p className="fon">{b4}</p>
            </div>
            <div className="right">
                <h2 className="tc">Eligibility Criteria</h2>
                <p className="i fon tc">{description}</p>
            </div>
            </div>
        </div>
        
    );
}
export default AdmissionComponent;