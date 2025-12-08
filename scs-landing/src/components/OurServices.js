import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Import local images from assets folder
import itStaffing from "../assets/Itstaff.png";
import nonItStaffing from "../assets/NonIt.png";
import payroll from "../assets/payroll.png";
import recruitment from "../assets/Recruitment.png";
import hrConsulting from "../assets/HRConsulting.png";
import statutory from "../assets/Statutory.png";
import internship from "../assets/Internship.png";
import training from "../assets/TrainingDev.png";

const servicesData = [
  {
    title: "IT Staffing",
    description:
      "The process of finding and placing skilled IT professionals to meet a company's short-term or long-term technology talent needs.",
    image: itStaffing,
  },
  {
    title: "Non-IT Staffing",
    description:
      "Non-IT staffing involves recruiting for non-technology roles across diverse industries like healthcare, finance, and manufacturing, focusing.",
    image: nonItStaffing,
  },
  {
    title: "Payroll Services",
    description:
      "Deductions, such as gross salary, allowances, and taxes, as well as documentation involved in calculating, managing, and distributing employee.",
    image: payroll,
  },
  {
    title: "Recruitment",
    description:
      "A variety of assets designed to attract, engage, and inform potential candidates about a company, its culture, and open positions.",
    image: recruitment,
  },
  {
    title: "HR Consulting",
    description:
      "HR strategies with business goals, and navigate complex workforce challenges to improve overall performance and employee satisfaction.",
    image: hrConsulting,
  },
  {
    title: "Statutory Compliance",
    description:
      "A company's adherence to the laws and regulations established by national and state governments to govern its operations, employee treatment.",
    image: statutory,
  },
    {
    title: "Internship",
    description:
      "Can refer to the tasks and responsibilities of a content-focused internship, such as writing for blogs, social media, or website management.",
    image: internship,
  },
  {
    title: "Training & Development",
    description:
      "Training and development content refers to the materials and resources designed to help employees enhance their skills, performance, and growth.",
    image: training,
  },
];

const OurServices = () => {
  return (
    <div className="services-section container py-2" id="services">
      <h2 className="fw-bold mb-4 text-dark">Our Services</h2>
      <div className="row g-4">
        {servicesData.map((service, index) => (
          <div className="col-md-6" key={index}>
            <div className="service-card d-flex justify-content-between align-items-center shadow-sm p-0">
              <div className="service-text p-3">
                <h5 className="fw-semibold service-title">{service.title}</h5>
                <p className="service-description mb-0">{service.description}</p>
              </div>
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
