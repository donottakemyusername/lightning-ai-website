import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const phases = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin with a thorough consultation to understand your organization's mission, goals, and funding needs. Our AI system analyzes your past applications and organizational data to create a customized strategy.",
      icon: "🤝"
    },
    {
      number: "02",
      title: "Research & Match",
      description: "Our AI-powered system searches through 30,000+ grants to identify the most suitable opportunities. We analyze success rates, requirements, and alignment with your mission to create a targeted list.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "AI-Powered Writing",
      description: "Using advanced AI technology, we generate compelling grant applications tailored to each opportunity. Our system learns from successful applications and incorporates your organization's unique voice.",
      icon: "✍️"
    },
    {
      number: "04",
      title: "Expert Review",
      description: "Our team of grant experts reviews and refines the AI-generated applications, ensuring accuracy, compliance, and maximum impact. We provide comprehensive feedback and optimization.",
      icon: "📋"
    }
  ];

  return (
    <div className="services-container">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Services</h1>
        <p>Lightning AI & Consulting combines human expertise with cutting-edge AI to revolutionize your grant application process. We ensure you have the best chance of securing funding while saving time and resources.</p>
      </motion.div>

      <motion.div 
        ref={ref}
        className="phases-grid"
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
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="phase-card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="phase-icon">{phase.icon}</div>
            <div className="phase-number">Phase {phase.number}</div>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2>Ready to Transform Your Grant Application Process?</h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className="cta-button">
            Get Started Today
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;