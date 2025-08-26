import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <p>No.18,Baker's Street,Golden City</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>+123-456-7890</p>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <p>a.golden.son@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
