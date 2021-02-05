import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="padding">
            <div className="box tc">
                <div className="address pa4 tc">
                    <h2>Address :</h2>
                    <p>Sharda Mandir Road, Sharda Chowk, </p>
                    <p>Madan Mahal, Jabalpur,</p>
                    <p>Madhya Pradesh, 482002.</p>
                    <p>Contact - 076124 41352</p>
                    <p>Email - www.takshshila.org</p>
                </div>
                <div className="address admission pa4">
                    <h2>Admission Open</h2> 
                    <p className="align-button">
                        Bachelor of Engineering
                        <Link to="/admission"><button>Click Here</button></Link>
                    </p>
                    <p className="align-button center">
                        Master of Engineering
                        <Link to="/admission"><button>Click Here</button></Link>
                    </p>                      
                    <p className="align-button center">
                        MBA
                        <Link to="/admission"><button>Click Here</button></Link>
                    </p>     
                </div>
                <div className="address pa4 tc">
                    <h2>Notice Board</h2>
                    <p>Last date for submitting BE Application is 21/10/2020.</p>
                    <p>Last date for submitting ME Application is 16/10/2020.</p>
                    <p>Late date to submit admission from with late fee is 30/10/2020.</p>
                    <p>Please follow all the CoVid instructions properly.</p>
                </div>
                <div className="address admission pa4 tc">
                    <h2>Quick Links</h2>
                    <p className="f4 align-button center">
                        About Us
                        <Link to="/about"><button>Click Here</button></Link>
                    </p>  
                    <p className="f4 align-button center">
                        Facilities
                        <Link to="/facilities"><button>Click Here</button></Link>
                    </p>  
                    <p className="f4 align-button center">
                        Admission
                        <Link to="/admission"><button>Click Here</button></Link>
                    </p>  
                    <p className="f4 align-button center">
                        Departments
                        <Link to="/departments"><button>Click Here</button></Link>
                    </p>  
                </div>
            </div>
        </div>  
    );
}
export default Contact;