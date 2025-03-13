import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us using the contact details below.</p>

      <div className="contact-info">
        <div className="info-item">
          <h2>Our Address</h2>
          <p>123 Business Street, Cityname, Country</p>
        </div>

        <div className="info-item">
          <h2>Email Us</h2>
          <p>contact@ourbusiness.com</p>
        </div>

        <div className="info-item">
          <h2>Phone Number</h2>
          <p>(+123) 456-7890</p>
        </div>

        <div className="info-item">
          <h2>Working Hours</h2>
          <p>Monday - Friday: 9 AM - 5 PM</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
