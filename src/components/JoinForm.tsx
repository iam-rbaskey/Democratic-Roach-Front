"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Info } from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman & Nicobar Islands", 
  "Chandigarh", "Dadra & Nagar Haveli & Daman & Diu", "Delhi", "Jammu & Kashmir", 
  "Ladakh", "Lakshadweep", "Puducherry"
];

const AGE_GROUPS = ["Under 18", "18-24", "25-34", "35+"];

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    ageGroup: "",
  });
  const [geoData, setGeoData] = useState<{
    ip?: string;
    city?: string;
    region?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
  }>({});
  const [declaration, setDeclaration] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [roachId, setRoachId] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch client IP and Geolocation silently on component mount
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response error");
        return res.json();
      })
      .then((data) => {
        setGeoData({
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
        });
      })
      .catch((err) => {
        console.warn("[DRF Geo] IP Geolocation lookup failed: ", err);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!declaration) {
      setErrorMessage("You must accept the official declaration to proceed.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      ...formData,
      ip: geoData.ip || null,
      locationCity: geoData.city || "Unknown",
      locationRegion: geoData.region || "Unknown",
      locationCountry: geoData.country || "Unknown",
      latitude: geoData.latitude || null,
      longitude: geoData.longitude || null,
    };

    try {
      const res = await fetch("/api/enlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setRoachId(data.roachId);
        // Sync resolved server IP into geoData if client-side did not fetch it
        if (!geoData.ip && data.ip) {
          setGeoData(prev => ({ ...prev, ip: data.ip }));
        }
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to register. Please check your data and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Secure database connection error. Failed to reach the registration server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="join" 
      className="relative py-24 bg-drf-bg-primary overflow-hidden border-t border-drf-border"
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] red-radial-glow pointer-events-none z-0" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 select-none">
          <span className="font-geist-mono text-[9px] uppercase tracking-widest text-drf-red font-black block mb-4">
            CIVIC REGISTRATION PORTAL
          </span>
          <h2 className="text-4xl font-black tracking-tight text-drf-text mb-2">
            Enlist As A Roacher.
          </h2>
          <p className="text-xs sm:text-sm text-drf-text/60 font-normal leading-relaxed max-w-lg mx-auto">
            Activating a decentralized node joins you with millions of Indian youth standing up for civic reforms and institutional accountability.
          </p>
        </div>

        {/* Futuristic Glass Form Container */}
        <div className="glass-card bg-white border border-white/80 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {/* Subtle scanning accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-drf-red to-transparent opacity-60" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Info Alert Box */}
                <div className="flex gap-2.5 p-3.5 bg-drf-bg-primary border border-drf-border rounded-lg text-drf-text/75 text-[11px] leading-relaxed">
                  <Info className="w-4 h-4 text-drf-red shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-drf-text">Secure Activation Protocols:</span> Your decentralized node profile is strictly encrypted to preserve user confidentiality and ensure system accountability.
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-geist font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-geist-mono text-[9px] tracking-wider uppercase font-bold text-drf-text/50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-3.5 py-3 bg-drf-bg-primary/40 border border-drf-border focus:border-drf-red focus:shadow-[0_0_15px_rgba(139,0,0,0.1)] rounded-lg font-geist text-xs text-drf-text outline-none transition-all duration-300 placeholder:text-drf-text/30"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-geist-mono text-[9px] tracking-wider uppercase font-bold text-drf-text/50">
                      Secure Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="aarav@domain.com"
                      className="w-full px-3.5 py-3 bg-drf-bg-primary/40 border border-drf-border focus:border-drf-red focus:shadow-[0_0_15px_rgba(139,0,0,0.1)] rounded-lg font-geist text-xs text-drf-text outline-none transition-all duration-300 placeholder:text-drf-text/30"
                    />
                  </div>

                  {/* State Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="state" className="font-geist-mono text-[9px] tracking-wider uppercase font-bold text-drf-text/50">
                      State / Union Territory
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      disabled={isSubmitting}
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-drf-bg-primary/40 border border-drf-border focus:border-drf-red rounded-lg font-geist text-xs text-drf-text outline-none transition-all duration-300 cursor-pointer"
                    >
                      <option value="" disabled>Select Location State</option>
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st} className="text-drf-text bg-white">{st}</option>
                      ))}
                    </select>
                  </div>

                  {/* Age Group Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ageGroup" className="font-geist-mono text-[9px] tracking-wider uppercase font-bold text-drf-text/50">
                      Age Bracket
                    </label>
                    <select
                      id="ageGroup"
                      name="ageGroup"
                      required
                      disabled={isSubmitting}
                      value={formData.ageGroup}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-drf-bg-primary/40 border border-drf-border focus:border-drf-red rounded-lg font-geist text-xs text-drf-text outline-none transition-all duration-300 cursor-pointer"
                    >
                      <option value="" disabled className="text-drf-text/30">Select Age Bracket</option>
                      {AGE_GROUPS.map((age) => (
                        <option key={age} value={age} className="text-drf-text bg-white">{age}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Declaration Checkbox */}
                <div className="flex items-start gap-2.5 mt-2 select-none">
                  <input
                    type="checkbox"
                    id="declaration"
                    required
                    disabled={isSubmitting}
                    checked={declaration}
                    onChange={(e) => setDeclaration(e.target.checked)}
                    className="mt-1 accent-drf-red cursor-pointer"
                  />
                  <label htmlFor="declaration" className="font-geist text-[10px] sm:text-[11px] text-drf-text/60 leading-relaxed cursor-pointer">
                    I declare that the information provided is accurate and I stand in support of systemic accountability, transparency, and youth-led reform under the DRF platform.
                  </label>
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 bg-drf-red hover:bg-drf-dark-red disabled:bg-drf-red/60 text-white font-bold text-sm tracking-wider uppercase rounded-lg shadow-[0_4px_20px_rgba(139,0,0,0.2)] hover:shadow-[0_4px_30px_rgba(139,0,0,0.45)] transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Credentials...</span>
                    </>
                  ) : (
                    <span>Register Node</span>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-6 select-none"
              >
                {/* Node Active Hologram Graphic */}
                <div className="w-16 h-16 rounded-full border border-drf-red/30 bg-drf-red/5 flex items-center justify-center text-drf-red mb-6 shadow-[0_0_20px_rgba(139,0,0,0.2)]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                
                <h3 className="font-geist font-black text-xl text-drf-text mb-2">
                  Node Activated.
                </h3>
                
                <p className="font-geist text-xs text-drf-text/60 leading-relaxed mb-6 max-w-sm">
                  Welcome to the Front, Roacher. Your decentralized node has been successfully logged to our secure database.
                </p>

                {/* Terminal style badge */}
                <div className="w-full bg-drf-bg-primary border border-drf-border rounded-lg p-4 font-geist-mono text-left text-xs text-drf-text/75 flex flex-col gap-1.5 shadow-sm">
                  <div className="flex justify-between">
                    <span className="text-drf-text/45">NODE STATUS:</span>
                    <span className="text-drf-red font-bold animate-pulse">ACTIVE / PERSISTED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-drf-text/45">ROACH ID:</span>
                    <span className="font-bold">{roachId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-drf-text/45">LOCATION STATE:</span>
                    <span className="font-bold uppercase">{formData.state}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-drf-text/45">RESOLVED IP:</span>
                    <span className="font-bold">{geoData.ip || "Capturing..."}</span>
                  </div>
                  {geoData.city && (
                    <div className="flex justify-between">
                      <span className="text-drf-text/45">GEO COORDINATES:</span>
                      <span className="font-bold uppercase">
                        {geoData.city}, {geoData.region} ({geoData.latitude?.toFixed(2)}, {geoData.longitude?.toFixed(2)})
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-drf-text/45">ENCRYPTION:</span>
                    <span>AES-GCM-256</span>
                  </div>
                </div>

                <p className="text-[10px] text-drf-text/40 font-geist-mono uppercase mt-8 tracking-widest">
                  YOUR COMPLAINT BLOCK IS SECURED. STAND BY FOR ASSIGNMENT.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
