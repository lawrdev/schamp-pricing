import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PricingPage from "../pages/pricingPage";

function AppLayout() {
  return (
    <>
      <Navbar />
      <h2>Pricing</h2>
      <PricingPage />
    </>
  );
}

export default AppLayout;
