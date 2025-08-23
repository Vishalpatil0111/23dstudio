import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Main Pages
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Career from "../Pages/Career";
import Contact from "../Pages/Contact";
import Work from "../Pages/Work"

// Work Pages

// import ArchitecturalVisualization from "../pages/Work/ArchitecturalVisualization";
// import ProductVisualization from "../pages/Work/ProductVisualization";
// import EventExhibition from "../pages/Work/EventExhibition";
// import BrandingIdentity from "../pages/Work/BrandingIdentity";
// import MarketingPromotion from "../pages/Work/MarketingPromotion";
import Home from "../Pages/Home";
import WorkDescribe from "../Components/WorkSub/WorkDescribe";
import PrivacyPolicyModal from "../Components/Privacy";

export default function RouterSetup() {
   
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/services/work" element={<Work/>} />
      <Route path="/services/work/:id" element={<WorkDescribe />} />
      
     
    </Routes>
  );
}
