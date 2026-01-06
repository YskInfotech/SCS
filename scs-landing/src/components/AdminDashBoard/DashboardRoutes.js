import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../Pages/DashboardHome";
import Getintouch from "../Contactus/Getintouch";
import AdminOnBoarding from "../AdminOnBoarding/AdminOnBoarding";
import AdminOnboardingDetail from "../AdminOnBoarding/AdminOnboardingDetail";
import NeedManpowerPopup from "../Pages/NeedManpowerPopup";


function DashboardRoutes() {
  return (
    <Routes>
       <Route path="/" element={<DashboardHome/>} />
       <Route path="/Getintouch" element={<Getintouch/>}/>
       <Route path="/NeedManpowerPopup" element={<NeedManpowerPopup/>}/>
       <Route path="/AdminOnBoarding" element={<AdminOnBoarding/>}/>
       <Route path="/OnboardingDetail/:id" element={<AdminOnboardingDetail/>}/>
    </Routes>
  );
}

export default DashboardRoutes;
