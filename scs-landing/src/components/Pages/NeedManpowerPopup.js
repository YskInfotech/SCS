import React, { useState } from "react";


const NeedManpowerPopup = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored =
      JSON.parse(localStorage.getItem("getInTouchRequests")) || [];

    stored.push({
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "getInTouchRequests",
      JSON.stringify(stored)
    );

    alert("Submitted successfully");
    onClose();

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      requirement: "",
      comments: "",
    });
  };

  return (
    <div className={`popup-form-overlay ${show ? "show" : ""}`}>
      <div className="popup-form">
        <div className="popup-header">
          <h3>Need Manpower</h3>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <form className="form-fields" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Company Name</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              maxLength={10}
              required
            />
          </div>

          <div className="mb-3">
            <label>Select Requirement</label>
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">-- Select --</option>
              <option>Payroll services</option>
              <option>Statutory Compliance</option>
              <option>Staffing Solutions</option>
              <option>IT Staffing solutions</option>
              <option>Recruitment Services</option>
              <option>Training & Development</option>
              <option>HR Consulting</option>
              <option>Executive Search</option>
              <option>NAPS</option>
              <option>Others</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="form-control"
              rows="3"
            />
          </div>

          <button className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NeedManpowerPopup;
