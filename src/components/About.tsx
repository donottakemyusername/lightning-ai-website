import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import jeffreyPhoto from '../assets/images/Jeffrey.jpg';
import bowenPhoto from '../assets/images/Bowen.jpg';


const About: React.FC = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <motion.section 
                className="about-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>About Us</h1>
                <p className="about-tagline">
                    Empowering non-profits through AI-driven grant solutions
                </p>
            </motion.section>

            {/* Mission Section */}
            <motion.section 
                className="mission-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="content-wrapper">
                    <h2>Our Mission</h2>
                    <p className="mission-text">
                        Our startup venture is driven by a deep and personal understanding of the challenges 
                        many non-profit organizations face. We envision leveraging generative AI and LLMs and 
                        consulting problem-solving approaches to address and solve this problem. We recognize 
                        that many researchers and non-profits have exceptional initiatives and pragmatic programs 
                        to create positive impacts in their communities. Still, they often need help to scale up 
                        their services due to budget constraints.
                    </p>
                    <p className="mission-text">
                        Jeffrey and Bowen have profound first-hand experience with these challenges at their 
                        non-profit community, BOLT UBC. Jeffrey and Bowen co-founded BOLT in 2020 with the 
                        vision to bring business and data analytics knowledge to students from all backgrounds. 
                        Soon after founding the club, the pair noticed a significant challenge - Budget.
                    </p>
                </div>
            </motion.section>

            {/* Founders Section */}
            <motion.section 
                className="founders-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Meet Our Founders</h2>
                
                <div className="founders-grid">
                    {/* Jeffrey */}
                    <motion.div 
                        className="founder-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="founder-image">
                            <img src={jeffreyPhoto} alt="Jeffrey Peng" />
                        </div>
                        <div className="founder-info">
                            <h3>Jeffrey Peng</h3>
                            <p className="founder-title">Co-Founder</p>
                            <div className="founder-story">
                                <p>
                                    "We hope to make our events free or as cheap as possible to make them accessible 
                                    to the greatest number of students. However, at the same time, the transition from 
                                    Zoom events in 2020 to in-person events in 2021 has made it expensive with the 
                                    addition of food and some venue-related costs."
                                </p>
                                <p>
                                    "Our team had to dedicate significant time to grant applications to maintain the 
                                    same quality of events. The time spent on grant applications has taken away from us 
                                    the previous time that we can spent on our core competencies - bettering the quality 
                                    of events and expanding our sphere of influence to more students."
                                </p>
                                <p>
                                    "Therefore, since 2021, we have contemplated a more efficient grant application method. 
                                    Today, the opportunity has finally ripened."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bowen */}
                    <motion.div 
                        className="founder-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="founder-image">
                            <img src={bowenPhoto} alt="Bowen Zhang" />
                        </div>
                        <div className="founder-info">
                            <h3>Bowen Zhang</h3>
                            <p className="founder-title">Co-Founder</p>
                            <div className="founder-story">
                                <p>
                                    Together with Jeffrey, Bowen recognized the critical need for a more efficient 
                                    approach to grant applications. Their shared experience at BOLT UBC revealed how 
                                    administrative burdens can limit the impact of mission-driven organizations.
                                </p>
                                <p>
                                    "We built an AI-driven solution that automates the grant application process at scale. 
                                    By compiling relevant grants and generating tailored applications, we will alleviate 
                                    administrative burdens for non-profits. Clients can focus on community impact while we 
                                    unlock funding potential."
                                </p>
                                <p>
                                    "Ultimately, we want to be a one-stop shop for researchers and non-profit organizations 
                                    to apply for all eligible grants and achieve their full impact potential!"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Story Section */}
            <motion.section 
                className="story-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="content-wrapper">
                    <h2>Our Story</h2>
                    <div className="story-content">
                        <motion.div 
                            className="story-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="story-icon">🎓</div>
                            <h3>The Beginning - BOLT UBC</h3>
                            <p>
                                In 2020, Jeffrey and Bowen co-founded BOLT UBC with a mission to democratize 
                                business and data analytics education for students from all backgrounds. What 
                                started as a passion project soon revealed a critical challenge facing non-profits 
                                everywhere.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="story-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="story-icon">💡</div>
                            <h3>The Challenge</h3>
                            <p>
                                As BOLT transitioned from virtual to in-person events, costs soared. The team spent 
                                countless hours on grant applications, time that could have been spent improving 
                                programs and serving more students. They realized this wasn't just their problem—it 
                                was a universal challenge for non-profits and researchers.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="story-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="story-icon">🚀</div>
                            <h3>The Solution</h3>
                            <p>
                                After years of contemplation and the maturation of AI technology, Jeffrey and Bowen 
                                saw the opportunity to solve this problem at scale. Lightning AI was born—combining 
                                their consulting expertise with cutting-edge generative AI to revolutionize grant 
                                applications.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="story-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="story-icon">🎯</div>
                            <h3>Our Vision</h3>
                            <p>
                                We want to be the one-stop shop for researchers and non-profit organizations to apply 
                                for all eligible grants and achieve their full impact potential. By automating the 
                                administrative burden, we enable organizations to focus on what truly matters—creating 
                                positive change in their communities.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Values Section */}
            <motion.section 
                className="values-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Our Values</h2>
                <div className="values-grid">
                    {[
                        { icon: '🤝', title: 'Community First', desc: 'We believe in empowering organizations that make a real difference in their communities.' },
                        { icon: '🔬', title: 'Innovation', desc: 'We harness cutting-edge AI technology to solve real-world problems for non-profits.' },
                        { icon: '💪', title: 'Accessibility', desc: 'We make grant funding accessible to organizations of all sizes, removing financial barriers.' },
                        { icon: '✨', title: 'Quality', desc: 'We deliver personalized, high-quality applications that truly represent each organization.' }
                    ].map((value, index) => (
                        <motion.div 
                            key={index}
                            className="value-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                className="about-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Ready to Transform Your Grant Process?</h2>
                <p>Let's work together to unlock your organization's full funding potential.</p>
                <button className="cta-button" onClick={() => window.location.href = '/discovery'}>
                    Get Started Today
                </button>
            </motion.section>
        </div>
    );
};

export default About;