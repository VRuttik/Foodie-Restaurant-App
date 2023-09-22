import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes, // Use Routes instead of Switch
  Link
} from "react-router-dom";

import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MenuPage from './components/MenuPage';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
