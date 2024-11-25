"use client";
import './index.scss';

import React, { useEffect, useState } from "react";

interface TimeCount {
    days:string;
    hours:string;
    minutes:string;
    seconds:string;
}

const getTimeLeft = (expiry:string): TimeCount => {
    let days = "0";
    let hours = "0";
    let minutes= "0";
    let seconds="0";

    const difference = new Date(expiry).getTime() - new Date().getTime();

    if(difference <= 0) {
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
    hours = Math.floor((difference / (1000 *60 * 60)) % 24).toString();
    minutes = Math.floor((difference / (1000 * 60)) % 60 ).toString();
    seconds = Math.floor((difference/1000) % 60).toString();


    return {
        days,
        hours,
        minutes,
        seconds
    }


}

const Timer = ({launchDate} : {launchDate:string}) => {
    const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

    useEffect (() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(launchDate));

        }, 1000)
        return () => clearInterval(interval);
    }, [launchDate])

    return (
        <div className="timer">
            <span className="items">
                {timeLeft.days}<small>Days</small>
            </span>
            <span className="items">
                {timeLeft.hours} <small>Hours</small>
            </span>
            <span className="items">
                {timeLeft.minutes} <small>Minutes</small>
            </span>
            <span className="items">
                {timeLeft.seconds} <small>Seconds</small>
            </span>
        </div>
    );
};

export default Timer;