import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/DiscoveryForm.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  orgName: string;
  website: string;
  grantValue: string;
  previousFunding: 'none' | 'less10k' | 'more10k';
  mission: string;
}

const DiscoveryPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    orgName: '',
    website: '',
    grantValue: '',
    previousFunding: 'none',
    mission: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `
      New Discovery Form Submission:
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Organization: ${formData.orgName}
      Website: ${formData.website}
      Grant Value Seeking: ${formData.grantValue}
      Previous Funding: ${formData.previousFunding}
      Mission: ${formData.mission}
    `;
    
    window.location.href = `mailto:bowenzhang99@gmail.com?subject=New Discovery Form Submission&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="discovery-page">
      <Header />
      <div className="discovery-form-container">
        <h1>Find My Top Grants</h1>
        <h2>Lightning AI Discovery Form</h2>
        
        <form onSubmit={handleSubmit} className="discovery-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="First name*"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last name*"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Organization Name*"
              required
              value={formData.orgName}
              onChange={(e) => setFormData({...formData, orgName: e.target.value})}
            />
          </div>

          <div className="form-group">
            <input
              type="url"
              placeholder="Organization Website*"
              required
              value={formData.website}
              onChange={(e) => setFormData({...formData, website: e.target.value})}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Total grant value seeking this year (Approx.)*"
              required
              value={formData.grantValue}
              onChange={(e) => setFormData({...formData, grantValue: e.target.value})}
            />
          </div>

          <div className="form-group radio-group">
            <label>Has your organization previously received any grant funding?*</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="previousFunding"
                  value="more10k"
                  checked={formData.previousFunding === 'more10k'}
                  onChange={(e) => setFormData({...formData, previousFunding: 'more10k'})}
                />
                Yes, {'>'} $10,000
              </label>
              <label>
                <input
                  type="radio"
                  name="previousFunding"
                  value="less10k"
                  checked={formData.previousFunding === 'less10k'}
                  onChange={(e) => setFormData({...formData, previousFunding: 'less10k'})}
                />
                Yes, {'<'} $10,000
              </label>
              <label>
                <input
                  type="radio"
                  name="previousFunding"
                  value="none"
                  checked={formData.previousFunding === 'none'}
                  onChange={(e) => setFormData({...formData, previousFunding: 'none'})}
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <textarea
              placeholder="In 2–3 sentences, briefly describe your organization's mission and key programs."
              value={formData.mission}
              onChange={(e) => setFormData({...formData, mission: e.target.value})}
              rows={4}
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        <div className="connect-now">
          <p>Already ready to connect?</p>
          <a 
            href="https://calendly.com/bowenzhang99"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-button"
          >
            👉 Book your free 30-minute strategy call now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscoveryPage;