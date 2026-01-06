import React, { useState } from "react";
import "../Styles/Sources.css";
 
 
import jobFairsImg from "../assets/jobfair.png";
 import csrImg from "../assets/csr.png";
 import collegesImg from "../assets/associatecoll.png";
import districtImg from "../assets/districtlevel.png";
 import bannerImg from "../assets/bannerImg.png";
import Header from "./Header";
import NeedManpowerPopup from "./Pages/NeedManpowerPopup";
 
const Sources = () => {
  const [showForm, setShowForm] = useState(false);
  return (
     <>
    <div className="source">
        <Header/>
      <section className="source-hero">
        <img src={bannerImg} alt="Connecting Companies" className="source-hero-bg" />
 
        <div className="source-hero-overlay">
         
          <h1 className="source-hero-title">
            Connecting Companies with Skilled Talent to Drive Business Success
          </h1>
       
 
          <div className="source-hero-actions">
            <button className="source-btn source-btn-primary"  onClick={() => setShowForm(true)}>Get Manpower</button>
            <button className="source-btn source-btn-outline">Join As Worker</button>
          </div>
        </div>
      </section>
 
     
      <section className="source-main container">
       
        <div className="source-left">
       
          <article id="job-fairs" className="source-card">
            <div className="source-card-content">
              <h3 className="source-card-title">Job Fairs</h3>
              <p className="source-card-subtitle">
                Connecting Students to Real Job Opportunities
              </p>
              <p className="source-card-text">
              We organize job fairs that link students and job seekers with reputed companies. Participants can meet recruiters, attend on-spot interviews, and explore multiple openings in one place — creating real career growth
              </p>
            </div>
            <div className="source-card-image-wrapper">
               <img src={jobFairsImg} alt="Job Fairs" className="source-card-image" />
            </div>
          </article>
 
       
          <article id="csr-training" className="source-card">
            <div className="source-card-content">
              <h3 className="source-card-title">CSR Training Programme</h3>
              <p className="source-card-subtitle">
                Skill Development Through CSR Support
              </p>
              <p className="source-card-text">
               We provide CSR-based training for youth and students, focusing on technical & communication skills to improve employability. These programs create opportunities for skill growth and better placement chances.  
              </p>
            </div>
            <div className="source-card-image-wrapper">
               <img src={csrImg} alt="CSR Training Programme" className="source-card-image" />
            </div>
          </article>
 
       
          <article id="colleges" className="source-card">
            <div className="source-card-content">
              <h3 className="source-card-title">Associated 100+ Colleges</h3>
              <p className="source-card-subtitle">
                Trusted Placement Partner for Institutions
              </p>
              <p className="source-card-text">
                We collaborate with over 100 colleges to offer workshops, campus drives, internships, and career guidance, helping students become industry ready with strong placement support
              </p>
            </div>
            <div className="source-card-image-wrapper">
               <img src={collegesImg} alt="Associated Colleges" className="source-card-image" />
            </div>
          </article>
 
         
          <article id="district" className="source-card">
            <div className="source-card-content">
              <h3 className="source-card-title">Working in District Level</h3>
              <p className="source-card-subtitle">
                Expanding Training Access Across Districts
              </p>
              <p className="source-card-text">
               We operate across multiple districts to support students in rural and urban areas with training, guidance, and placement assistance for better career outcomes.
              </p>
            </div>
            <div className="source-card-image-wrapper">
              <img src={districtImg} alt="District Level Work" className="source-card-image" />
            </div>
          </article>
        </div>
 
       
      </section>
    </div>
 
         <NeedManpowerPopup
        show={showForm}
        onClose={() => setShowForm(false)}
      />
    
     </>
 
  );
};

export default Sources;