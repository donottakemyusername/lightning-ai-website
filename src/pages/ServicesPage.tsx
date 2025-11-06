import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';  // Added import

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;