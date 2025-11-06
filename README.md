# Lightning AI & Consulting Website

A modern, responsive React website for Lightning AI & Consulting - an AI-driven grant application service for non-profits.

## Features

- ✨ Modern, gradient-based design with smooth animations
- 📱 Fully responsive for mobile, tablet, and desktop
- 🎨 Clean, professional UI with intuitive navigation
- 📋 Comprehensive grant discovery form
- 🎯 Detailed service and process information
- 👥 Founder stories and company mission

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Email Integration

The Discovery Form is set up to send emails to `bowenzhang99@gmail.com`. You have several options to implement this:

### Option 1: EmailJS (Recommended for Quick Setup)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS:
```bash
npm install @emailjs/browser
```

4. Update `components/DiscoveryForm.tsx`:
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        await emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                organizationName: formData.organizationName,
                organizationWebsite: formData.organizationWebsite,
                grantValue: formData.grantValue,
                previousFunding: formData.previousFunding,
                missionDescription: formData.missionDescription,
                to_email: 'bowenzhang99@gmail.com'
            },
            'YOUR_PUBLIC_KEY'
        );
        setSubmitted(true);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
};
```

### Option 2: Backend API

Create a backend API endpoint (Node.js/Express example):

```javascript
// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

app.post('/api/send-discovery-form', async (req, res) => {
    const formData = req.body;
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'bowenzhang99@gmail.com',
        subject: `New Grant Discovery Form: ${formData.organizationName}`,
        html: `
            <h2>New Grant Discovery Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Organization:</strong> ${formData.organizationName}</p>
            <p><strong>Website:</strong> ${formData.organizationWebsite}</p>
            <p><strong>Grant Value Seeking:</strong> ${formData.grantValue}</p>
            <p><strong>Previous Funding:</strong> ${formData.previousFunding}</p>
            <p><strong>Mission:</strong> ${formData.missionDescription}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

### Option 3: Third-Party Form Services

Use services like:
- **Formspree** (formspree.io)
- **Form-Data** (form-data.com)
- **Getform** (getform.io)

These provide simple form endpoints that handle email sending.

## Google Calendar Integration

For the "Book a Call" button, you have two options:

### Option 1: Calendly

1. Sign up at [Calendly](https://calendly.com/)
2. Create a scheduling link
3. Update the `handleBookCall` function in `DiscoveryForm.tsx`:
```typescript
const handleBookCall = () => {
    window.open('https://calendly.com/your-username/30min', '_blank');
};
```

### Option 2: Google Calendar Appointment Schedule

1. Create an appointment schedule in Google Calendar
2. Get the shareable link
3. Update the function with your link

## File Structure

```
src/
├── components/
│   ├── Home.tsx / Home.css          # Main landing page
│   ├── About.tsx / About.css        # About page with founder info
│   ├── Services.tsx                 # Services information
│   ├── DiscoveryForm.tsx / DiscoveryForm.css  # Grant discovery form
│   ├── Header.tsx / Header.css      # Navigation header
│   └── Footer.tsx / Footer.css      # Site footer
├── pages/
│   ├── HomePage.tsx                 # Home page wrapper
│   ├── AboutPage.tsx                # About page wrapper
│   ├── ServicesPage.tsx             # Services page wrapper
│   └── DiscoveryPage.tsx            # Discovery form page wrapper
├── styles/
│   └── main.css                     # Global styles
├── App.tsx                          # Main app with routing
└── index.tsx                        # React entry point
```

## Customization

### Colors

The site uses a purple gradient theme. To change colors, update these variables in the CSS files:

- Primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Text colors: `#2d3748` (dark), `#4a5568` (medium)
- Background: `#f8f9fa`, `#e9ecef`

### Images

Replace placeholder images for founders:
1. Add images to `public/images/` folder
2. Update the image placeholders in `About.tsx`:
```tsx
<img src="/images/jeffrey.jpg" alt="Jeffrey Peng" />
<img src="/images/bowen.jpg" alt="Bowen Zhang" />
```

### Content

All content can be easily updated in the respective component files:
- Home content: `components/Home.tsx`
- About content: `components/About.tsx`
- Form fields: `components/DiscoveryForm.tsx`

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/lightning-ai",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Lightning AI & Consulting. All rights reserved.

## Contact

For questions or support, contact: bowenzhang99@gmail.com