import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../Pages/DashboardHome";
import Getintouch from "../Contactus/Getintouch";
import Onboardlanding from "../Onboarding/Onboardlanding";
import Onboarddetails from "../Onboarding/Onboarddetails";


function DashboardRoutes() {
  return (
    <Routes>
       <Route path="/" element={<DashboardHome/>} />
       <Route path="/Getintouch" element={<Getintouch/>}/>
       <Route path="/Onboarddetails" element={<Onboarddetails/>}/>
       <Route path="/Onboardlanding/*" element={<Onboardlanding/>}/>

    </Routes>
  );
}

export default DashboardRoutes;
