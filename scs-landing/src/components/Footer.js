import React from "react";
import "../App.css";
import logo from "../assets/FooterLogo.png"; // ensure correct path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Sri Charan Solutions" />
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>IT Staffing</li>
            <li>Non-IT Staffing</li>
            <li>Payroll Services</li>
            <li>Recruitment</li>
            <li>HR Consulting</li>
            <li>Statutory Compliance</li>
            <li>Internship</li>
            <li>Training & Development</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="footer-section" style={{marginBottom:"130px"}}>
          <h3>Sources</h3>
          <ul>
            <li>Job fairs</li>
            <li>CSR Training Programs</li>
            <li>Associated 100+ Colleges</li>
            <li>Working in District Level</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact" style={{marginBottom:"210px"}}>
          <p><strong>Email:</strong> info@sricharan.com</p>
          <p><strong>Phone:</strong> +91 123456789</p>
          <p><strong>Website:</strong> www.sricharan.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
