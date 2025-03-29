
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceCards from "@/components/AudienceCards";
import Features from "@/components/Features";
import FeatureShowcase from "@/components/FeatureShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AudienceCards />
      <Features />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default Index;
