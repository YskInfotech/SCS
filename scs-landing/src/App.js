import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import DashboardLayout from './components/AdminDashBoard/DashboardLayout';





function App() {
  return (
    <div className="App">
     
     
    

 <Router>

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard*" element={<DashboardLayout/>} />
       


      </Routes>
    </Router>

    </div>
  );
}

export default App;
