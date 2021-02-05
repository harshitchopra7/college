import React from 'react';
import './Admission.css';
import AdmissionComponent from './AdmissionComponent';

function Admission() {
    return (
        <div>
            <h1 className="tc">Bachelor Of Engineering</h1>
            <hr className="lines" />
            <AdmissionComponent
                id={1}
                duration={4}
                b1="BE Computer Science Engineering"
                b2="BE Electrical & Electronics Engineering"
                b3="BE Mechanical Engineering"
                b4="BE Civil Engineering"
                description="The student must have Chemistry, Mathematics, and Physics as the subjects in Class 12. In addition, student must score at least 50% of marks in Class 12 to be eligible admission. However, students belonging to reserved categories such as SC/ ST will have the relaxation of up to 5% in the minimum qualifying marks. "
            />
            <h1 className="tc">Master Of Engineering</h1>
            <hr className="lines" />
            <AdmissionComponent
                id={2}
                duration={2}
                b1="ME Computer Science Engineering"
                b2="ME Digital Communication & Networking"
                b3="ME Embedded System and VLSI Design"
                b4="ME Energy Engineering"
                description="Student who have completed their BE/BTech degree with a valid score in GATE are eligible for admission. Student who have completed a 5-year program in Science or Applied Sciences resulting in the award of a Master of Science degree are also eligible."
            />
            <h1 className="tc">Master Of Business Administration</h1>
            <hr className="liness" />
            <AdmissionComponent
                id={3}
                duration={2}
                b1="MBA"
                description="A graduate degree under 10+2+3 or 10+2+4 pattern under any discipline, securing at least 50% marks in aggregate, from a recognized university. An honors degree under 10+2+4 pattern from a recognized university under UGC Act with at least 50% marks in aggregate including languages."
            />
        </div>
    );
}
export default Admission;