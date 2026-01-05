import React, { useState } from "react";
import "../App.css";

import rajeshImg from "../assets/manager.jpg";
import priyaImg from "../assets/HRlead.jpg";
import arjunImg from "../assets/HotelManger.jpg";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Factory Manager",
    img: rajeshImg,
    text: `"SRI CHARAN SOLUTIONS provided us with skilled workers on short notice. Their efficiency and professionalism exceeded our expectations. Excellent service!"`,
  },
  {
    name: "Priya Sharma",
    role: "HR Lead",
    img: priyaImg,
    text: `"We’ve been working with SRI CHARAN SOLUTIONS for 3 years now. Their workforce is reliable, professional, and cost-effective. Highly recommend their services."`,
  },
  {
    name: "Arjun Singh",
    role: "Hotel Manager",
    img: arjunImg,
    text: `"Our security staff and housekeeping needs were fulfilled efficiently by SRI CHARAN SOLUTIONS. The quality of workers and their support team is outstanding."`,
  },
];

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="testimonials-section">
        <div className="testimonial-header-top">
          <h2 className="testimonial-title">Client Testimonials</h2>
        </div>

        <div className="testimonial-wrapper">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <div className="testimonial-left">
                  <img src={t.img} alt={t.name} className="testimonial-img" />
                  <div>
                    <h4 className="testimonial-name">{t.name}</h4>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
                <span className="quote-icon">”</span>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Fixed "Get in Touch" Button */}
        <div
          className="get-in-touch-btn fixed-btn"
          onClick={() => setShowForm(true)}
        >
          <span>
            Get
            <br />
            In
            <br />
            Touch
          </span>
        </div>
      </div>

      {/* Slide-in Form Overlay */}
      <div className={`popup-form-overlay ${showForm ? "show" : ""}`}>
        <div className="popup-form">
          <div className="popup-header">
            <h3>Need Manpower</h3>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </button>
          </div>
          <form className="form-fields">
            <div className="mb-3">
              <label>Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Company Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Select Requirement</label>
              <select className="form-select" required>
                <option value="">-- Select --</option>
                <option>Payroll services</option>
                <option>Statutory Compliance</option>
                <option>Staffing Solutions</option>
                <option>IT Staffing solutions</option>
                <option>Recruitmant Services</option>
                <option>Training & Development Services</option>
                <option>HR Consulting Services</option>
                <option>Executive Search Soluations</option>
                <option>NAPS</option>
                <option>Others</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Comments</label>
              <textarea type="tel" className="form-control"  />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
