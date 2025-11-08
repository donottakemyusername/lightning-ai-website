import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';
import logo from '../assets/images/lightning-ai-logo.png';
import { Link } from 'react-router-dom';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: '🎯', title: 'AI Precision', description: 'Advanced AI technology for precise applications' },
  { icon: '⏱️', title: 'Time Saving', description: 'Reduce application time from weeks to days' },
  { icon: '🛡️', title: 'Risk Mitigation', description: 'Apply to more grants to increase success' },
  { icon: '🔍', title: 'Enhanced Awareness', description: 'Access to 30,000+ grants across US & Canada' },
  { icon: '💰', title: 'Cost Efficiency', description: 'Pay only when you succeed in securing grants' },
  { icon: '📊', title: 'Flexible Billing', description: 'Choose payment options that work for you' }
];

// Animation timing
const TRACE_DURATION = 2.0;      // Electric line traces logo outline
const SHIMMER_DURATION = 0.3;    // Subtle energy shimmer
const FLASH_DURATION = 0.4;      // Bright lightning flash
const BLOOM_DURATION = 0.8;      // White bloom transition
const TOTAL_MS = (TRACE_DURATION + SHIMMER_DURATION + FLASH_DURATION + BLOOM_DURATION) * 1000;

const HomePage: React.FC = () => {
  const [showLoader, setShowLoader] = useState(() => !sessionStorage.getItem('hasSeenLoader'));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!showLoader) return;
    const t = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, TOTAL_MS);
    return () => clearTimeout(t);
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
            className="electric-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo container with tracing effect */}
            <div className="logo-trace-container">
              {/* Base logo (hidden initially, fades in as trace completes) */}
              <motion.div 
                className="logo-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: TRACE_DURATION * 0.7,
                  duration: 0.5 
                }}
              >
                <img src={logo} alt="Lightning AI" />
              </motion.div>

              {/* Electric tracing line that follows logo outline */}
              <svg className="logo-trace-svg" viewBox="0 0 400 400">
                <defs>
                  {/* Electric glow filter */}
                  <filter id="electricGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feFlood floodColor="#60a5fa" floodOpacity="0.8" />
                    <feComposite in2="blur" operator="in" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  
                  {/* Lightning flicker animation */}
                  <animate
                    id="flicker"
                    attributeName="opacity"
                    values="1;0.8;1;0.9;1"
                    dur="0.15s"
                    repeatCount="indefinite"
                  />
                </defs>

                {/* Tracing path around logo - adjust path to match your logo shape */}
                <motion.path
                  d="M 100 200 L 150 150 L 200 100 L 250 150 L 300 200 L 250 250 L 200 300 L 150 250 Z"
                  stroke="url(#electricGradient)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#electricGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0, 1, 1, 0.8] 
                  }}
                  transition={{
                    pathLength: { 
                      duration: TRACE_DURATION, 
                      ease: "easeInOut" 
                    },
                    opacity: { 
                      duration: TRACE_DURATION 
                    }
                  }}
                />

                {/* Electric gradient */}
                <defs>
                  <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <animate
                      attributeName="x1"
                      values="-100%;100%"
                      dur={`${TRACE_DURATION}s`}
                      repeatCount="1"
                    />
                    <animate
                      attributeName="x2"
                      values="0%;200%"
                      dur={`${TRACE_DURATION}s`}
                      repeatCount="1"
                    />
                  </linearGradient>
                </defs>
              </svg>

              {/* Energy shimmer particles */}
              <div className="energy-shimmer">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="shimmer-particle"
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      x: Math.cos(i * Math.PI / 4) * 120,
                      y: Math.sin(i * Math.PI / 4) * 120
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                      x: Math.cos(i * Math.PI / 4) * 180,
                      y: Math.sin(i * Math.PI / 4) * 180
                    }}
                    transition={{
                      delay: TRACE_DURATION + (i * 0.05),
                      duration: SHIMMER_DURATION,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Lightning flash overlay */}
            <motion.div
              className="lightning-flash"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 0.3, 0] }}
              transition={{
                delay: TRACE_DURATION + SHIMMER_DURATION,
                duration: FLASH_DURATION,
                times: [0, 0.2, 0.4, 0.7, 1],
                ease: "easeInOut"
              }}
            />

            {/* White bloom transition */}
            <motion.div
              className="white-bloom"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 2 }}
              transition={{
                delay: TRACE_DURATION + SHIMMER_DURATION + FLASH_DURATION * 0.3,
                duration: BLOOM_DURATION,
                ease: "easeOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main page fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-page">
          <Header />
          
          {/* Hero Section */}
          <motion.section 
            className="hero-section"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-content">
              <h1 className="hero-title">Grant Application Reimagined with AI</h1>
              <p className="hero-subtitle">Lightning AI & Consulting provides an automated and customized system for your grant applications</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="cta-button">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Grid */}
          <section className="features-section">
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
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;