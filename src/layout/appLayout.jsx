import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PricingPage from "../pages/pricingPage";

function AppLayout() {
  return (
    <>
      <Navbar />
      <PricingPage />
      <Footer />
    </>
  );
}

export default AppLayout;
