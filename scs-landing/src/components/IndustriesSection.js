import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import manufactureIcon from "../assets/Manufacture.png";
import itIcon from "../assets/ItIndustries.png";
import ecommerceIcon from "../assets/ECommerce.png";
import hospitalityIcon from "../assets/Hospitality.png";
import fmcgIcon from "../assets/FMCG.png";
import facilityIcon from "../assets/Facility.png";

const industries = [
  { name: "Manufacturing", icon: manufactureIcon },
  { name: "IT Industries", icon: itIcon },
  { name: "E-Commerce", icon: ecommerceIcon },
  { name: "Hospitality", icon: hospitalityIcon },
  { name: "FMCG Industries", icon: fmcgIcon },
  { name: "Facility Management", icon: facilityIcon },
];

const IndustriesSection = () => {
  return (
    <section className="industries-section py-5">
      <Container>
        <h2 className="section-title mb-4 fw-bold text-start">
          Industries We Serve
        </h2>

        <Card className="industries-card p-4">
          <Row className="text-center gy-4">
            {industries.map((industry, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                xs={12}
                className="d-flex flex-column align-items-center position-relative industry-col"
              >
                <div className="icon-wrapper mb-2">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="industry-icon"
                  />
                </div>
                <p className="industry-name">{industry.name}</p>

                {/* vertical line: show except last in each row */}
                {(index === 0 || index === 1 || index === 3 || index === 4) && (
                  <div className="vertical-divider d-none d-md-block"></div>
                )}
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default IndustriesSection;
