import React from "react";
import './index.scss'
import RedHawk from '../../Assets/Images/Rocky-Coding.png'
const About = () => {
    return (
        <div className="about">
            <div className="text">
                <h1 className="welcome">Welcome to Hawk Hack,</h1>
                <p className="about-text">Where creativity meets technology! This event was designed to bring together developers, designers, entrepreneurs
                    and many people of various backgrounds come together and to create, build, and innovate. Whether you are an 
                    experienced developer, or someone who has never written a single line of code, our hackathon is a perfect 
                    opportunity to learn and grow as innovators by working on exciting projects and networking with other like-minded
                    individuals.</p>
                <br />
                    <p className="about-text">
                    Over the course of 48 hours, teams will collaborate to create innovative solutions, tackle real-world challenges,
                    and showcase their skills, with the possibly winning a prize at the end!
                    </p>
                <br />
                <p className="about-text">
                Join us as we push the limits of innovation!
                </p>
            </div>
            <div className="img-container">
                <img src={RedHawk} alt="Rocky the Red Hawk coding!" />
            </div>

        </div>
        
    )
}

export default About;