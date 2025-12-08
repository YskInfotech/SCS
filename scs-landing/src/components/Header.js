  import React from "react";
  import { Navbar, Nav, Container, Button } from "react-bootstrap";
  import logo from "../assets/logo.png";
  import "../App.css"; // import CSS for styling

  const Header = () => {
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
              <Nav.Link href="#home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="mx-2">
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
                  href="#source"
                  className="nav-link dropdown-toggle"
                  id="sourcesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sources
                </a>
                <ul className="dropdown-menu" aria-labelledby="sourcesDropdown">
                  <li>
                    <a className="dropdown-item" href="#job-fairs">
                      Job Fairs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#csr-training">
                      CSR Training Programme
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#colleges">
                      Associated 100+ Colleges
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#district">
                      Working in District Level
                    </a>
                  </li>
                </ul>
              </div>

              <Nav.Link href="#contact" className="mx-2">
                Contact Us
              </Nav.Link>
              <Button variant="success" className="ms-3 px-3 py-1 nav-custom-btn">
                Get Manpower
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  export default Header;
