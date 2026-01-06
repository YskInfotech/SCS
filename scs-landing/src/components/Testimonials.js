import React, { useState } from "react";
import "../App.css";

import rajeshImg from "../assets/manager.jpg";
import priyaImg from "../assets/HRlead.jpg";
import arjunImg from "../assets/HotelManger.jpg";
import NeedManpowerPopup from "./Pages/NeedManpowerPopup";

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

        <NeedManpowerPopup
        show={showForm}
        onClose={() => setShowForm(false)}
      />

    </>
  );
};

export default Testimonials;
