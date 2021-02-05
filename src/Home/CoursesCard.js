import React from 'react';
import './CoursesCard.css';

function CoursesCard({ id, courseName, att1, att2, att3, att4}) {
    return (
        <div className="card-container">
            <div className="cards grow shadow-5">
                <h1>{courseName}</h1> 
                <div className="attributes">
                    <h3>{att1}</h3>
                    <h3>{att2}</h3>
                    <h3>{att3}</h3>
                    <h3>{att4}</h3>
                </div>  
            </div>
        </div>
    );
}
export default CoursesCard; 