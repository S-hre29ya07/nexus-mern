import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Team from './components/Team';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import ServicesNav from './components/ServicesNav';
import ProductNav from './components/ProductNav';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Nexus Nova - Empowering Digital Change");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesNav />} />
            <Route path="/team" element={<Team />} /> 
            <Route path="/products" element={<ProductNav />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
