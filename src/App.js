import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Location from "./pages/Location";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
