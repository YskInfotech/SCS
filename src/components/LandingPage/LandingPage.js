import React from "react";
import "../../../src/App.css";
import Header from "../Header";
import AboutCompany from "../AboutCompany";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import OurServices from "../OurServices";
import IndustriesSection from "../IndustriesSection";
import WhyChooseUs from "../WhyChooseUs";
import Testimonials from "../Testimonials";





function LandingPage() {
    return (
        <>
    <Header/>
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