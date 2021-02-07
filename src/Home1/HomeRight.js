import React from 'react';
import './HomeRight.css';
import image from './image.jpg';
import chairman_photo1 from './chairman_photo1.jpg';
import chairman_photo2 from './chairman_photo2.jpg';

function HomeRight() {
    return (
        <div className="home_right">
            <img className="front_image" src={image} alt="" />
            <p className="chairman_msg">Message from Chairman</p>
            <div className="msg_desc1">
                <div className="msg_desc1_left">
                    <img className="chairman_photo1" src={chairman_photo1} alt="" />
                </div>
                <div className="msg_desc1_right">
                    <p>Constantly ranked as one of the top engineering institutions in Madhya Pradesh & one among the top fifty colleges in India (by Competition Success Review survey), Takshshila Institute of Engineering & Technology is now on its twelth year of operation a premier technical institution. It has emerged as one of the most preferred institutes of Engineering & Management.</p>
                    <p>Nine batches have already graduated and we are today among the best education providers in the RGPV system. Our results are exemplary both from the point of view of merit as well as from the placement perspective. Our students have been placed in the best organizations of the country. Many have gone abroad for higher studies. All in all, the last nine years have been a challenging and rewarding experience for us.</p> 
                    <p>With an aim to remain quality conscious, efficient and responsive to today’s rapidly changing economic and technological developments, Takshshila has taken up the challenge, not only to give technical and corporate training to the students, but also to make them self-confident, better human beings, with leadership qualities.</p>
                    <p>Takshshila Institute of Engineering & Technology has evolved as a symbol of quality education dedicated to nurture the talent and aspiration of the dynamic, vibrant & bright youth of our country. Globalization has brought in its wake an emphasis on consumer concerns, such as quality (quality assurance is the need of the hour for continuous upgradation), infrastructure and teaching-learning processes. Economic restructuring of any country heavily depends on the institution’s performance and technology driven teaching practices. Takshshila Institute of Engineering & Technology has introduced such practices to develop young students as engineers to meet these demands of society.</p>
                </div>
            </div>

            <div className="msg_desc2">
                <div className="msg_desc2_left">
                    <p>In the wake of the crisis in the industry, it is important to be a step ahead, a step faster and surer. The students are trained to equip themselves to take on the world and carve out a niche’ in tomorrow’s world, so that they are assured of not only promising career opportunities but are well equipped to face the challenges of life as well. It goes without saying that science, technology and engineering, though different entities, are related and interact with one another in complex ways. </p>
                </div>
                <div className="msg_desc2_right">
                    <img className="chairman_photo2" src={chairman_photo2} alt="" />
                </div>
            </div>
            <p className="msg_desc3">Our present aim is to provide high class engineering education; we are committed to do it. In short, science is preoccupied with the understanding and explaining, while engineering is concerned with doing, realizing and implementing. Thus, the aim of future engineering education should be the integration of knowledge, skills, understanding and experience. It has been noted that Nano technology, Computers, and Information Technology will be the main technology drivers in the present era, with Materials Science as an important area in futuristic education.</p>
            <p className="msg_desc3">Takshshila Institute of Engineering & Technology is planning to start new courses in these fields. Every engineer produced from Takshshila Institute of Engineering & Technology will emerge as a problem solver. We concentrate not only on analytical skills but also on design aspects integrated with mathematics, basic sciences, and engineering sciences to meet specific needs. Our students are creative and are highly professional.</p>

            <p className="chairman_name">Shri S. C. Masuraha</p>
            <p className="chairman_designation">Chairman, Takshshila Institute of Engineering & Technology</p>

        </div>
    )
}

export default HomeRight;
