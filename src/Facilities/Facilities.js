import React from 'react';
import './Facilities.css';
import './FacilitiesComponent';
import FacilitiesComponent from './FacilitiesComponent';
import audi from './audi.jpg';
import lib from './lib.jpg';
import canteen from './canteen.jpg';
import clabs from './clabs.jpg';
import langlabs from './langlabs.jpg';
import ncc from './ncc.jpg';
import mlabs from './mlabs.jpg';

function Facilities() {
    return (
        <div className="display tc">
            <div className="image-row">
                <FacilitiesComponent 
                    id={1}
                    img={lib}
                    facilityName="Library"
                />
                <FacilitiesComponent 
                    id={2}
                    img={audi}
                    facilityName="Auditorium"
                />
                <FacilitiesComponent 
                    id={3}
                    img={mlabs}
                    facilityName="Mechanical Labs"
                />
            </div>
            <div>    
                <FacilitiesComponent 
                    id={4}
                    img={clabs}
                    facilityName="Computer Lab"
                /> 
                <FacilitiesComponent 
                    id={5}
                    img={canteen}
                    facilityName="Canteen"
                />
            </div>
            <div>    
                <FacilitiesComponent 
                    id={6}
                    img={langlabs}
                    facilityName="Language Lab"
                />
                <FacilitiesComponent 
                    id={7}
                    img={ncc}
                    facilityName="NCC"
                />
            </div>
        </div>
    );
}
export default Facilities;