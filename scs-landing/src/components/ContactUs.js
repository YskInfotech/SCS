import React from "react";
import "../Styles/contactus.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-section" id="contact">
     
      <div className="contact-header">
        <h4 className="contact-title">Contact Us</h4>
      </div>

      
      <div className="contact-content">
        
        <div className="contact-item">
          <div className="contact-item-header">
           
            <strong>Corporate Office</strong>
          </div>
          <p className="contact-text">
            #6-3-789, Unit No-512, 5th floor, <br />
            Pavani Prestige Comercial Complex, <br />
             Ameerpet , Hyderabad,Telangana -500016. <br />
            
          </p>


        
        </div>

       
        <div className="contact-item right">
          <div className="contact-item-header">
          <FaPhoneAlt className="contact-icon green"/>
            <strong>Phone Number</strong>
          </div>
          <p className="contact-text">+91-9642559099</p>

          <div className="contact-item-header">
           <MdEmail  className="contact-icon blue"/>  
            <strong>Email ID</strong>
          </div>
          <p className="contact-text">hr@scsinfotech.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
