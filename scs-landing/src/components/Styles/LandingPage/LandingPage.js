import React from "react";
import "../../../App.css";

import Header from "../../Header";
import HeroSection from "../../HeroSection";
import AboutCompany from "../../AboutCompany";
import OurServices from "../../OurServices";
import IndustriesSection from "../../IndustriesSection";
import WhyChooseUs from "../../WhyChooseUs";
import Testimonials from "../../Testimonials";
import ContactUs from "../../ContactUs";
import Footer from "../../Footer";




function LandingPage() {
    return (
        <>
    <Header />
    <HeroSection/>
    <AboutCompany/>
    <OurServices/>
    <IndustriesSection/>
    <WhyChooseUs/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>


        </>
    )
}
export default LandingPage;