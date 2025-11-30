import React from "react";
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Section  */}
      <WhyChooseSection />

      <Footer />
    </div>
  );
};
