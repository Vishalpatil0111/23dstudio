import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import CustomCursor from "./assets/CustomCursor";
import Footer from "./Components/Footer";
import RouterSetup from "./Routes/RouterSetup";
import ScrollToTop from "./assets/ScrollToTop";
import Loader from "./Utils/Loader";
import PrivacyPolicyModal from "./Components/Privacy";

function App() {


  return (
    <div className="w-full cursor-none ">
      <CustomCursor />
      <Loader logo="/images/Logob.png" firmName="23DStudio" />
      <ScrollToTop />
      <NavBar />
      <RouterSetup />
      <Footer />
      

    </div>
  );
}

export default App;
