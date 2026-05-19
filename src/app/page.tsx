"use strict";

"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WhyDRF from "@/components/WhyDRF";
import Agenda from "@/components/Agenda";
import YouthVoices from "@/components/YouthVoices";
import RoachersCounter from "@/components/RoachersCounter";
import Manifesto from "@/components/Manifesto";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Cinematic Loader */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Global Interactive Elements (rendered once loading completes) */}
      {!loading && (
        <div className="relative min-h-screen flex flex-col">
          {/* Custom animated cursor */}
          <CustomCursor />
          
          {/* Movie-grade noise film overlay */}
          <NoiseOverlay />
          
          {/* Floating Top Navigation */}
          <Navbar />
          
          {/* Landing Sections */}
          <main className="flex-grow">
            {/* Immersive Hero Header */}
            <Hero />
            
            {/* Live Campaign Slogan Ticker */}
            <Ticker />
            
            {/* Split narrative: Why DRF exists */}
            <WhyDRF />
            
            {/* Grid framework: The Six Policies */}
            <Agenda />
            
            {/* Testimonial walls: Anonymous concerns scrolling */}
            <YouthVoices />
            
            {/* Dark Red statistics count section */}
            <RoachersCounter />
            
            {/* Editorial manifesto summary */}
            <Manifesto />
            
            {/* Action Item: Become a Roacher */}
            <JoinForm />
          </main>
          
          {/* Minimal Dark Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
