import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../components/Home.css';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="home-page">
      <Header />
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1>Grant Application Reimagined with AI</h1>
          <p>Lightning AI & Consulting provides an automated and customized system for your grant applications</p>
          <motion.a 
            href="/contact" 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
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
              staggerChildren: 0.2
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
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
};

export default HomePage;