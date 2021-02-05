import React from 'react';
import './FacilitiesComponent.css';


function FacilitiesComponent({ img, facilityName }) {
    return (
        <div className="card">
            <div className="image-card">
                <img alt="" src={img} />
                <p className="mt2 f4">{facilityName}</p>
            </div>
            
        </div>
    );
}
export default FacilitiesComponent;