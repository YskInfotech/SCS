import React from "react";
import "../App.css";
import verifiedIcon from "../assets/verfy.png";
import deploymentIcon from "../assets/ontime.png";
import supportIcon from "../assets/Twenty.png";
import costIcon from "../assets/profit.png";
import panIndiaIcon from "../assets/location.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container container" >
      {/* Outer circle with description text */}
      <div className="outer-circle">
        <p className="outer-desc">
          To become India's most trusted and preferred manpower solutions
          provider
        </p>

        {/* Inner blue circle with title */}
        <div className="why-circle">
          <h4 className="why-title">Why Choose Us</h4>
        </div>
      </div>

      {/* Right-side features */}
      <div className="features">
        <div className="feature-item" style={{marginLeft:"-45px"}}>
          <div className="icon-circle">
            <img src={verifiedIcon} alt="Verified Workforce" />
          </div>
          <div className="feature-line"></div>
          <span className="feature-text">Verified Workforce</span>
        </div>

        <div className="feature-item">
          <div className="icon-circle">
            <img src={deploymentIcon} alt="On-time Deployment" />
          </div>
          <div className="feature-line"></div>
          <span className="feature-text">On-time Deployment</span>
        </div>

        <div className="feature-item">
          <div className="icon-circle">
            <img src={supportIcon} alt="24/7 Support" />
          </div>
          <div className="feature-line"></div>
          <span className="feature-text">24/7 Support</span>
        </div>

        <div className="feature-item">
          <div className="icon-circle">
            <img src={costIcon} alt="Cost Effective" />
          </div>
          <div className="feature-line"></div>
          <span className="feature-text">Cost Effective</span>
        </div>

        <div className="feature-item"  style={{marginLeft:"-45px"}}>
          <div className="icon-circle">
            <img src={panIndiaIcon} alt="Pan-India Service" />
          </div>
          <div className="feature-line"></div>
          <span className="feature-text">Pan-India Service</span>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
