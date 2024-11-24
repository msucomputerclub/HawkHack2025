import React from "react";
import './index.scss'
import { TypeAnimation } from "react-type-animation";
import Timer from "../Timer/index.tsx";
import About from "../About";
import Faq from "../Faq";
import Team from "../Team/index";

const Home = () => {
    const launchDate = '2025-04-10T00:00:00';
    return (
        <div>
            <section id="home">
            <div className="home-page">
                <div className="join-us">
                    <h1>Montclair State University Computing Club Presents</h1>
                    <h1 className="hawkhack">HawkHack 2025</h1>
                    <TypeAnimation 
                        sequence={[
                            '24 hours of creation', 
                            1000,
                            'Win awesome prizes', 
                            1000,
                            '',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style = {{ fontSize:'40px', display:'inline-block', color:'#fff'}}
                        repeat={Infinity}
                    />
                    <a className="button" href="www.google.com" target={"_blank"}>
                            <h1 className="apply">Apply Now!</h1>
                    </a>

                </div>
                <div className="count-down">
                    <div className="date">
                        <span className="date-text">April 10-12, 2025</span>
                    </div>
                    <Timer launchDate={launchDate} />

                </div>
                
            </div>
            </section>
            <section id ="about">
                <About />
            </section> 
            <section id="faq">
                <Faq />
            </section>
            <section id="team">
                <Team />
            </section>


        </div>
    )
}

export default Home;