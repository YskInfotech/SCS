import React, { useState } from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "../App.css"; 
import img1 from "../assets/Group.png";
import img2 from "../assets/scs.jpg";
import img3 from "../assets/slide3.png";
import NeedManpowerPopup from "./Pages/NeedManpowerPopup";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <section className="hero-section" id="home">
      <Carousel fade interval={1000} controls={false} indicators={false}>
        
        {/* 1️⃣ First Slide */}
        <Carousel.Item>
          <div className="carousel-content d-flex align-items-center">
            <Container className="text-center text-white">
              <h1 className="fw-bold mb-3">Reliable Manpower Solutions</h1>
              <p className="lead highlight-text mb-4">
                Providing skilled, semi-skilled, and unskilled workforce across India.
              </p>
              <Button variant="success" size="lg" className="custom-btn me-3" onClick={() => setShowForm(true)}>
                Get Manpower
              </Button>
              <Button variant="outline-light rounded-pill" size="lg">
                Join As Worker
              </Button>
            </Container>
          </div>
          <img className="d-block w-100 carousel-img" src={img1} alt="First slide" />
        </Carousel.Item>
       
  {/* 2  Slide */}
        <Carousel.Item>
          <div className="carousel-content d-flex align-items-center">
            <Container className="text-end text-white">
              <h1 className="fw-bold mb-3">
                Experience The World Never Like Before
              </h1>
              <p className="lead highlight-text mb-4">
                 Technology is best  when it brings  people together.
              </p>
              <Button variant="success" size="lg" className="custom-btn me-3" onClick={() => setShowForm(true)}>
                Get Manpower
              </Button>
              <Button variant="outline-light rounded-pill" size="lg">
                Join Us
              </Button>
            </Container>
          </div>
          <img className="d-block w-100 carousel-img" src={img2} alt="Third slide" />
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
              <Button variant="success" size="lg" className="custom-btn me-3" onClick={() => setShowForm(true)}>
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

     <NeedManpowerPopup
        show={showForm}
        onClose={() => setShowForm(false)}
      />

    </>
  );
};

export default HeroSection;
