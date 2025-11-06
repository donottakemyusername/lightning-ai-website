import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>Grant Application Reimagined with AI</h1>
                    <p>Lightning AI & Consulting provides an automated and customized system for your grant applications</p>
                    <button 
                        onClick={() => navigate('/discovery')} 
                        className="cta-button"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <div className="features">
                <div className="feature">
                    <div className="feature-icon">🎯</div>
                    <h3>AI Precision</h3>
                    <p>Advanced AI technology for precise and tailored grant applications</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">⏱️</div>
                    <h3>Time Saving</h3>
                    <p>Reduce application time from weeks to days</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">🛡️</div>
                    <h3>Risk Mitigation</h3>
                    <p>Apply to more grants to increase success probability</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">🔍</div>
                    <h3>Enhanced Awareness</h3>
                    <p>Access to 30,000+ grants across US & Canada</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">💰</div>
                    <h3>Cost Efficiency</h3>
                    <p>Pay only when you succeed in securing grants</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">📊</div>
                    <h3>Flexible Billing</h3>
                    <p>Choose payment options that work for you</p>
                </div>
            </div>

            <div className="benefits">
                <div className="benefit">
                    <h3>Time Saving</h3>
                    <p>A typical grant application has 5-10 paragraphs asking for 250-500 words of content, which takes most non-profits 2-4 weeks to write and edit. In our research, we noticed that most non-profits apply to less than 5 grants a year due to time constraints. At Lightning AI, we aim to alleviate that burden and help you focus on your core missions.</p>
                </div>
                <div className="benefit">
                    <h3>Risk Mitigation</h3>
                    <p>Are you concerned about dedicating 2-4 weeks to creating a grant application and not receiving funding? Many researchers and non-profits are, so they do not apply for many of the grants they are eligible for. Lightning AI helps you mitigate that risk by using AI solutions to apply for all eligible grants, ensuring a high likelihood of securing at least one.</p>
                </div>
                <div className="benefit">
                    <h3>Enhanced Awareness</h3>
                    <p>There are over 30,000 grants in United States and Canada, and you may not be aware of all the grants that you are eligible for. Lightning AI leverages our exclusive AI-powered grant database to provide you with an extensive list of available grants tailored to your organization's unique needs. Say goodbye to the tedious search process!</p>
                </div>
                <div className="benefit">
                    <h3>Cost Efficiency</h3>
                    <p>Bid farewell to high grant writer costs. We charge fees predominantly after grant success, and our AI can handle multiple applications in the time it takes a writer to complete one. Our service fees are built into your grant application, so you don't have to pay it upfront!</p>
                </div>
            </div>

            <div className="cta-section">
                <h2>Ready to transform your grant application process?</h2>
                <button 
                    onClick={() => navigate('/discovery')} 
                    className="cta-button"
                >
                    Get Started Now
                </button>
            </div>
        </div>
    );
};

export default Home;