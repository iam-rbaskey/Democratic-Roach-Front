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
      <Loader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen flex flex-col">
          <CustomCursor />
          <NoiseOverlay />
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <Ticker />
            <WhyDRF />
            <Agenda />
            <YouthVoices />
            <RoachersCounter />
            <Manifesto />
            <JoinForm />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
