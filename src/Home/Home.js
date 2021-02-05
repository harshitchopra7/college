import React from 'react';
import image from './image.jpg';
import './Home.css';
import CoursesCard from './CoursesCard';

function Home() {
    return (
        <div className="home-page">
            <div className="image-div">
                <img className="image" alt="" src={image} />
            </div>
            <div className="courses">
                <div className="courses center">
                    <CoursesCard 
                        id={1} 
                        courseName="UG Courses" 
                        att1="BE Computer Science Engineering"  
                        att2="BE Electrical & Electronics Engineering"
                        att3="BE Mechanical Engineering"
                        att4="BE Civil Engineering"
                    />
                    <CoursesCard 
                        id={2} 
                        courseName="PG Courses" 
                        att1="ME Computer Science Engineering"  
                        att2="ME Digital Communication & Networking"
                        att3="ME Embedded System and VLSI Design"
                        att4="ME Energy Engineering" 
                    />
                    <CoursesCard
                        id={3}
                        courseName="MBA"
                        att1="Master of Business Administration"
                    />
                </div>
            </div>
        </div>
    );
}
export default Home;