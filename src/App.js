import React from 'react';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ScrollToTop from './components/ScroolToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
