import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import about from "../assets/about.png";
import visionIcon from "../assets/vision.png"; // Replace with your actual path
import missionIcon from "../assets/target.png"; // Replace with your actual path

const AboutCompany = () => {
  return (
    <div className="about-container container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-7">
          <h2 className="fw-bold mb-3">About Our Company</h2>
          <p className="text-muted">
            <strong>SRICHARN SOLUTIONS</strong> has been providing reliable
            workforce solutions for over 10 years. We specialize in delivering
            skilled and unskilled manpower to a variety of industries across
            India.
          </p>

          <div className="d-flex flex-wrap gap-4 mt-4">
            <div>
              <h4 className="text-primary fw-bold mb-0">10 +</h4>
              <p className="text-muted mb-0">Years Experience</p>
            </div>
            <div>
              <h4 className="text-primary fw-bold mb-0">500 +</h4>
              <p className="text-muted mb-0">Workers Deployed</p>
            </div>
            <div>
              <h4 className="text-primary fw-bold mb-0">200 +</h4>
              <p className="text-muted mb-0">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Section - Image Card with Shadow */}
        <div className="col-md-5 mt-4 mt-md-0 d-flex justify-content-center">
          <div className="outer-card p-2 rounded shadow-sm">
            <div className="inner-card shadow-lg rounded overflow-hidden">
              <img
                src={about}
                alt="Company Team"
                className="img-fluid w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Cards */}
      <div className="row text-center mt-5">
        {/* Vision Card */}
        <div className="col-md-6 mb-4">
          <div className="outer-info-card">
            <div className="card-top-bar  text-white px-3 py-2">
              Our Vision
            </div>
            <div className="card-inner d-flex align-items-center p-4">
              <img
                src={visionIcon}
                alt="Vision Icon"
                className="side-icon me-4"
              />
              <p className="text-start text-muted mb-0">
                To redefine how brands communicate their value by creating
                breathtaking visual and innovative tailored for the global
                audience.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="col-md-6 mb-4">
          <div className="outer-info-card">
            <div className="card-top-bar  text-white px-3 py-2">
              Our Mission
            </div>
            <div className="card-inner d-flex align-items-center p-4">
              <img
                src={missionIcon}
                alt="Mission Icon"
                className="side-icon me-4"
              />
              <p className="text-start text-muted mb-0">
                To help brands succeed through stunning visuals, powerful
                branding, and content that connect with their audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
