import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* <h1 className="logo">Logo</h1> */}
            <nav className="navbar">
                <div 
                    className={`hamburger ${menuOpen ? 'open' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                    {/* <li className="close-btn" onClick={toggleMenu}>✖</li> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/invitation">Invitation</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/guestbook">Guestbook</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
