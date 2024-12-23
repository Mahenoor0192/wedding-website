import React, { useState, useEffect } from "react";
import "../styles/Countdown.css";
import "../styles/global.css";
// import ThreeJsBackground from "./ThreeJsBackground"; // Import Three.js rotating background

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            const weddingDate = new Date("February 2, 2025 00:00:00").getTime();
            const now = new Date().getTime();
            const diff = weddingDate - now;

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-container">
            {/* Static Background */}
            {/* <ThreeJsBackground /> */}

            <div className="static-background" />

            {/* Rotating Flower */}

            {/* Countdown Overlay */}
            <div className="countdown">
                <h1>Countdown to Our Wedding</h1>
                <div className="countdown-timer">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="countdown-unit">
                            <span>{value}</span>
                            <p>{unit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Countdown;
