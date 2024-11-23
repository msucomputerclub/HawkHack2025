import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './index.scss'
const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <header>
            <div className="header-container">
                <div className="img-container">
                    <Link to="/" >
                        <img src="" alt="Montclair State University's Computer Club Logo" />
                    </Link>
                </div>
                <div className="link-container">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#faq">FAQ</a>
                    <a href="#prizes">Prizes</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#team">Team</a>
                </div> 
            </div>
        </header>

    )
}

export default Header;