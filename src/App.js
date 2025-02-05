import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Location from "./pages/Location";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
