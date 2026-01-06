  import React, { useState } from "react";
  import { Navbar, Nav, Container, Button } from "react-bootstrap";
  import { NavLink } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
  import logo from "../assets/logo.png";
  import "../App.css"; 
import NeedManpowerPopup from "./Pages/NeedManpowerPopup";


  const Header = () => {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
    const sections = [
      {
        title: "IT Staffing",
        items: [
          "Software developers",
          "Network administrators",
          "Database administrators",
          "Cybersecurity professionals",
          "Data scientists and analysts",
        ],
      },
      {
        title: "Non-IT Staffing",
        items: ["HealthCare", "Finance", "Marketing", "Education", "Other"],
      },
      {
        title: "Payroll Services",
        items: [
          "Payroll Outsourcing",
          "Payroll Solutions",
          "Payroll For Small Business",
        ],
      },
      {
        title: "Recruitment",
        items: ["IT Recruitment", "RPO", "Executive Search"],
      },
      {
        title: "HR Consulting",
        items: [
          "Management Consulting",
          "Human Resources",
          "Job Specific Roles",
        ],
      },
      {
        title: "Training & Development",
        items: [
          "PoSH Awareness Training",
          "First Time Managers",
          "Campus to Corporate",
        ],
      },
      {
        title: "Internship",
        items: [
          "Temporary & Short-Term",
          "Career Exploration",
          "Work Experience",
          "Networking Platform",
        ],
      },
      {
        title: "Statutory Compliance",
        items: [
          "Legal Framework",
          "Document Management",
          "Audit and Risk",
          "Compliance Officers/Managers",
          "Specialized Expertise",
        ],
      },
    ];

    return (
      <>
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="SCS Logo"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-lg-center fw-bold">
              <Nav.Link href="#home" className="mx-2"
              onClick={() => navigate("/")} >
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="mx-2"
              onClick={() => navigate("/")} >
                About
              </Nav.Link>

              {/* Mega Dropdown for Services */}
                <div className="nav-item dropdown mx-2 position-static">
                  <a
                    href="#services"
                    className="nav-link dropdown-toggle"
                    id="servicesDropdown"
                    role="button"
                    aria-expanded="false"
                    onClick={() => navigate("/")} 
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-wide p-4"
                    aria-labelledby="servicesDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        {sections.map((section, index) => (
                          <div key={index} className="col-md-3 col-sm-6 mb-3">
                            <h6 className="dropdown-title">{section.title}</h6>
                            <ul className="list-unstyled">
                              {section.items.map((item, i) => (
                                <li key={i} className="dropdown-item-custom">
                                  <span className="dot"></span> {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              {/* Other Nav Items */}
               <div className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                id="sourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => navigate("/sources")} 
              >
                Sources
              </a>

              <ul className="dropdown-menu" aria-labelledby="sourcesDropdown">
                <li>
                  <a className="dropdown-item" href="#job-fairs"
                  onClick={() => navigate("/sources")} >
                    Job Fairs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#csr-training"
                  onClick={() => navigate("/sources")} >
                    CSR Training Programme
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#colleges"
                  onClick={() => navigate("/sources")} >
                    Associated 100+ Colleges
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#district" 
                  onClick={() => navigate("/sources")} >
                    Working in District Level
                  </a>
                </li>
              </ul>
            </div>

              <Nav.Link href="#contact" className="mx-2"
               onClick={() => navigate("/")}>
                Contact Us
              </Nav.Link>
              <Button variant="success" className="ms-3 px-3 py-1 nav-custom-btn" onClick={() => setShowForm(true)}>
                Get Manpower
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

       <NeedManpowerPopup
        show={showForm}
        onClose={() => setShowForm(false)}
      />

      
      </>
    );
  };

  export default Header;
