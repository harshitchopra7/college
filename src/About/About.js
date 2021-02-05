import React from 'react';
import './About.css';
import campus from './campus.jpg';

function About() {
    return (
        <div className="about center">
            <div className="left">
                <img  className="pa6 campus" alt="" src={campus} />
            </div>
            <div className="right">
                <p className="text tc f4">Established in 2004, Takshshila Institute of Engineering and Technology (TIET), Jabalpur is a leading Private Un-Aided college based in Jabalpur.The college is popularly known as TIET Jabalpur among the students.The institute offers a wide array of academic courses and programmes that are approved by AICTE.The college, affiliated to Rani Durgavati Vishwavidyalaya, Jabalpur , is widely recognized for its academic standards. Takshshila Institute of Engineering and Technology (TIET), Jabalpur takes a holistic view of education and focuses on both, academic as well as personality development of the students. The qualified and experienced faculty at TIET Jabalpur along with the carefully designed and updated curriculum ensure that the students receive the best education and skills which can help them emerge as qualified professionals.In order to provide students with quality academic environment, the college has developed all the necessary infrastructural facilities. The key among them are Library, Laboratory, Playground, Canteen, Medical Help, Auditorium, Scholarship.</p>
            </div>
        </div>
    );
}
export default About;