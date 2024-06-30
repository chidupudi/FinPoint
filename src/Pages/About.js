import React from 'react';
import './About.css';
import logo from './logo.png';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={logo} alt="About Us" />
      </div>
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Managing personal finances can be challenging due to the fragmentation of financial information across different banks, credit cards, and investment platforms. Develop a personal finance dashboard that consolidates all financial information into one place, providing users with insights, budgeting tools, and financial planning features.
        </p>
        <p>
          Ensure that websites comply with WCAG (Web Content Accessibility Guidelines) standards, making the internet more inclusive and accessible to everyone, regardless of their physical or cognitive abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
