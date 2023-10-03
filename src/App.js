import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
//pages
import Home from "./components/pages/Home";
import Taggers from "./components/pages/Taggers";
import Rent from "./components/pages/Rent";
import RentSimple from "./components/pages/RentSimple";
import Contact from "./components/pages/Contact";

import "./css/Utilities.css";
import "./css/App.css";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taggers" element={<Taggers />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/rent-simple" element={<RentSimple />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer copyright="2023" />
      </Router>
    </div>
  );
}

export default App;
