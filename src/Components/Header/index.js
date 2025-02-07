import React, {useState} from "react";
import './index.scss'
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../Assets/Images/HawkHack-Logo.png"

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const item = {
        exit:{
            opacity: 0,
            height: 0,
            transition:{
                ease:"easeInOut",
                duration:0.3,
                delay:1.2
            }
        }
    }

    return (

        <header>
            <div className="header-container">
                <a className="logo" href="#home">
                    <img src={Logo} alt="" />
                </a>

                <div className="link-container">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#faq">FAQ</a>
                    <a href="#prizes">Prizes</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#team">Team</a>
                </div> 
                <div className="menu" onClick={toggleMenu}>
                        &#9776;
                </div>
            </div>
            <AnimatePresence>
                {
                    menuOpen && (

                        // Menu container
                        
                        <motion.div 
                        variants={item}
                        initial={{height:0,opacity:0}}
                        animate={{height:"100vh",opacity:1}}
                        transition={{delay:.1}}
                        exit="exit"
                        className="menu-container">
                        <div className="btn-close" onClick={toggleMenu}>&times;</div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#home"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.6}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.6}
                                    }}>
                                        Home
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#about"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.5}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.5
                                        }
                                    }}>
                                         About
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#faq"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.4}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.4}
                                    }}>
                                        FAQ
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    href="#prizes"
                                    className="motion-a"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.3}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.3}
                                    }}> 
                                        Prizes
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#sponsors"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.2}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.2}
                                    }}>
                                        Sponsors
                                </motion.a>
                            </div>
                            <div onClick={()=>setMenuOpen(false)}>
                                <motion.a
                                    className="motion-a"
                                    href="#team"
                                    initial={{y:80,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.1}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.1}
                                    }}>
                                        Team
                                </motion.a>
                            </div>
                        </motion.div>
                    )
                }
                </AnimatePresence>
        </header>

    )
}

export default Header;