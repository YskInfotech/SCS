import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutCompany from './components/AboutCompany';
import OurServices from './components/OurServices';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     
     
    <Header/>
    <HeroSection/>
    <AboutCompany/>
    <OurServices/>
    <IndustriesSection/>
    <WhyChooseUs/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
