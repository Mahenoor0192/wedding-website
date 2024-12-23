import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        gsap.fromTo(".hero", { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
        gsap.fromTo(".hero-content", { y: 500, opacity: 0 }, { y: 0, opacity: 1, duration: 3 });
    }, []);
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-caption">M & S</h1>
                <p>We're Getting Married! </p>
                <h1 className="hero-subtext">February 2, 2025</h1>
            </div>
        </div>
    );
};

export default Hero;
