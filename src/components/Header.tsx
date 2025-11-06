import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/lightning-ai-logo.png';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <div className="logo-container">
                    <img src={logo} alt="Lightning AI & Consulting" className="logo-image" />
                </div>
            </Link>
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