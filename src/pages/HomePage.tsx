import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../components/Home.css';
import './HomePage.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  { 
    icon: '🎯',
    title: 'AI Precision',
    description: 'Advanced AI technology for precise applications'
  },
  {
    icon: '⏱️',
    title: 'Time Saving',
    description: 'Reduce application time from weeks to days'
  },
  {
    icon: '🛡️',
    title: 'Risk Mitigation',
    description: 'Apply to more grants to increase success'
  },
  {
    icon: '🔍',
    title: 'Enhanced Awareness',
    description: 'Access to 30,000+ grants across US & Canada'
  },
  {
    icon: '💰',
    title: 'Cost Efficiency',
    description: 'Pay only when you succeed in securing grants'
  },
  {
    icon: '📊',
    title: 'Flexible Billing',
    description: 'Choose payment options that work for you'
  }
];

const HomePage: React.FC = () => {
  const [showLoader, setShowLoader] = useState(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    return !hasSeenLoader;
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem('hasSeenLoader', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div 
            className="lightning-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="lightning-container">
              <svg className="lightning-bolt" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M50 10 L35 60 L55 60 L40 140 L75 70 L55 70 L70 10 Z"
                  fill="url(#lightning-gradient)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    times: [0, 0.3, 0.7, 1],
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <defs>
                  <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <motion.div 
                className="loader-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Lightning AI
              </motion.div>
              <motion.div 
                className="loader-subtext"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Powering Your Grant Success
              </motion.div>
            </div>
            <div className="lightning-effects">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="lightning-strike"
                  style={{ left: `${20 + i * 20}%` }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: ['0%', '100%', '0%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-page">
          <Header />
          <motion.section 
            className="hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-content">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Grant Application Reimagined with AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Lightning AI & Consulting provides an automated and customized system for your grant applications
              </motion.p>
              <motion.a 
                href="/discovery" 
                className="cta-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.section>

          <motion.div 
            ref={ref}
            className="features-grid"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;