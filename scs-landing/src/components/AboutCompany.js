// __define-ocg__
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import about from "../assets/about.jpg";
import visionIcon from "../assets/vision.png";
import missionIcon from "../assets/target.png";

const AboutCompany = () => {
  return (
    <section>
      <div className="about-container container mt-5" id="about">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">About Our Company</h2>
            <p className="text-muted">
              <strong>SRICHARN SOLUTIONS</strong> has been providing reliable workforce solutions for over 10 years. We specialize in delivering skilled and unskilled manpower to a variety of industries across India.
              Our mission is to support businesses with the right talent while creating employment opportunities that uplift individuals and empower community grow
            </p>

            <div className="d-flex flex-wrap gap-4 mt-4">
              <div>
                <h4 className="text-primary-about fw-bold mb-0">10 +</h4>
                <p className="text-muted mb-0">Years Experience</p>
              </div>
              <div>
                <h4 className="text-primary-about fw-bold mb-0">500 +</h4>
                <p className="text-muted mb-0">Workers Deployed</p>
              </div>
              <div>
                <h4 className="text-primary-about fw-bold mb-0">200 +</h4>
                <p className="text-muted mb-0">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Section - Image Card with Shadow */}
          <div className="col-md-5 mt-4 d-flex justify-content-center">
            <div className="inner-card shadow-lg rounded overflow-hidden">
              <img
                src={about}
                alt="Company Team"
                className="img-fluid w-100 h-auto"
              />
            </div>
          </div>
        </div>

        <br />

        {/* Vision & Mission - equal height row */}
        <div className="row justify-content-center text-center mt-5 g-5 equal-height-cols">
          <div className="col-12 col-sm-6 col-md-6 col-lg-5 mb-4">
            <div className="outer-info-card">
              <div className="card-top-bar text-white px-3 py-2">
                Our Vision
              </div>
              <div className="card-inner">
                <img src={visionIcon} alt="Vision" className="side-icon" />
                <p className="text-start text-muted mb-0">
                  To redefine how brands communicate their value by creating breathtaking visuals tailored for the global audience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-5 mb-4">
            <div className="outer-info-card">
              <div className="card-top-bar text-white px-3 py-2">
                Our Mission
              </div>
              <div className="card-inner">
                <img src={missionIcon} alt="Mission" className="side-icon" />
                <p className="text-start text-muted mb-0">
                  To help brands succeed through stunning visuals, powerful branding, and content that connects with audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
