// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCategory from "../components/ServiceCategory";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Services / Categories */}
      <ServiceCategory />
    </div>
  );
};

export default Home;
