import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling the footer

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Lightning AI & Consulting. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;