import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "../App.css"; 
import img1 from "../assets/Group.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel fade interval={1000} controls={false} indicators={false}>
        
        {/* 1️⃣ First Slide */}
        <Carousel.Item>
          <div className="carousel-content d-flex align-items-center">
            <Container className="text-center text-white">
              <h1 className="fw-bold mb-3">Reliable Manpower Solutions</h1>
              <p className="lead highlight-text mb-4">
                Providing skilled, semi-skilled, and unskilled workforce across India.
              </p>
              <Button variant="success" size="lg" className="custom-btn me-3">
                Get Manpower
              </Button>
              <Button variant="outline-light rounded-pill" size="lg">
                Join As Worker
              </Button>
            </Container>
          </div>
          <img className="d-block w-100 carousel-img" src={img1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
  {/* Full Blue Background */}
  <div className="full-blue-slide d-flex align-items-center justify-content-center">
    <div className="content-card d-flex flex-wrap align-items-center">
      {/* Left Side - Text Content */}
      <div className="left-content p-4">
        <h1 className="fw-bold mb-3 text-white">
          Experience The World<br />Never Like Before
        </h1>
        <p className="lead highlight-text mb-4 text-white">
          Technology is best when it brings people together.
        </p>
        <Button variant="light" size="lg" className="custom-btn">
          Join With Us
        </Button>
      </div>

      {/* Right Side - Image */}
      <div className="right-image">
        <img src={img2} alt="Second Slide" className="img-fluid" />
      </div>
    </div>
  </div>
</Carousel.Item>

        {/* 3️⃣ Third Slide */}
        <Carousel.Item>
          <div className="carousel-content d-flex align-items-center">
            <Container className="text-center text-white">
              <h1 className="fw-bold mb-3">
                Want To Earn More As a Facility Manager?
              </h1>
              <p className="lead highlight-text mb-4">
                5 Things You May Want a Facility Management Company to Handle.
              </p>
              <Button variant="success" size="lg" className="custom-btn me-3">
                Get Manpower
              </Button>
              <Button variant="outline-light rounded-pill" size="lg">
                Join Us
              </Button>
            </Container>
          </div>
          <img className="d-block w-100 carousel-img" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
