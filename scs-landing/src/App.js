
import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import DashboardLayout from './components/AdminDashBoard/DashboardLayout';
import Login from './components/adminlogin/Login';
import Sources from "./components/Sources";
import OnboardingFlow from "./components/EmployeeOnboarding/OnboardingFlow";



function App() {


  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard*" element={<DashboardLayout />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/onboardingemployee" element={<OnboardingFlow/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
