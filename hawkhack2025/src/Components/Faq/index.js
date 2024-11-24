import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import './index.scss'

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        {
            id: 1,
            question:"When and where is HawkHack?",
            answer:(
            <>
            <br />
            HawkHack 2025 will be happening from April 10th-12th at our the student center 
            of our univeristy campus located at{" "}
            <a 
                href="https://www.google.com/maps?q=1+Normal+Ave,+Montclair,+NJ" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                1 Normal Ave, Montclair, NJ
            </a>. 
            You can find a map of the university by clicking{" "}
            <a 
                href="https://www.montclair.edu/campus-map/" 
                target={"_blank"}
                rel="noopener noreferrer"
                >
                    here
            </a>
            <br />
            </>),
        },
        {
            id: 2,
            question:"Who can sign up to compete?",
            answer:(<>
            <br />
            Any undergraduate or graduate student at any college in the US can sign up as long as they 
            are 18 or older. No experience is required!
            <br />
            </>),
        },
        {
            id: 3,
            question:"Do I have to register with a team?",
            answer:(<>
            <br />
            No, but if you would like to you can! You're welcome to register with your friends 
            or you can find a team at the event or in the discord.
            <br />
            </>),
        },
        {
            id: 4,
            question:"Do I need to pay to participate?",
            answer:(
                <>  <br />
                    Nope! No fee is required. However, you are required to bring your own laptop in order to develop.
                    <br />
                </>
            ),
        },
        {
            id: 5,
            question:"What should I bring?",
            answer:(
                <>
                    <br />
                    You should bring your own hardware to develop your project as we will not provide any. 
                    <br />
                </>
            ),
        },
        {
            id: 6,
            question:"What can't I bring?",
            answer:(
                <>
                    <br />
                    You are not allowed to bring a desktop because we will not be able to accommodate the space for it.
                    Futhermore, you are not allowed to bring any illegal substances, drugs, alcohol, or any weapons of any kind.
                    <br />
                </>
            ),
        },
        {
            id: 7,
            question:"Can a member of our team be at the event virtually?",
            answer:(
                <>  <br />
                    No, all members must be present in order to participate and each member must check in at the beginning of the event.
                    <br />
                </>
            ),
        },
        {
            id: 8,
            question:"What if I have other questions?",
            answer:(
                <>
                    <br />
                    Please refer to our Devpost page listed {" "}
                    <a 
                        href="https://devpost.com"
                        target={"_blank"}
                        >here
                    </a>. 
                    If you still have any questions please feel free to email us at {" "}
                    <a 
                        href="mailto:ComputingClub@sgamsu.org"
                        target={"_blank"}
                        >ComputingClub@sgamsu.org
                    </a>.
                    <br />
                </>
            ),
        },
    ]

    return (
        <div className="faq"> 
            <div className="question-container">
                <h2>Frequently Asked Questions</h2>
                { questions.map((q) => (
                    <div key ={q.id}>
                        <button
                            onClick={() => 
                                setActiveQuestion (
                                    activeQuestion === q.id ? null : q.id
                                )
                            }
                        >
                            {q.question}
                        </button>
                        <AnimatePresence>
                            {activeQuestion === q.id && (
                                <motion.div
                                initial={{opacity:0,height:0}}
                                animate={{opacity:1,height:"auto"}}
                                exit={{opacity:0,height:0}}
                                transition={{duration:0.5}}
                                className="answer"
                                >{q.answer}
                                </motion.div>   
                            )}
                        </AnimatePresence>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Faq;