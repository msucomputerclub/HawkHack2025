import React from "react";
import './index.scss'
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return (
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
            </div>
        </div>
    )
}

export default Home;