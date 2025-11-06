import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a separate CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Lightning AI & Consulting</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;