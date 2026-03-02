// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ tagline, callToAction }) => {
  return (
    <section id="home" className="relative bg-emerald-700 text-white h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image/Video - Replace with actual images or video */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/placeholder-hospital-exterior.jpg')" }} // Add a placeholder image in public/
        aria-label="Modern hospital exterior"
      ></div>
      {/* Example of adding another background element */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm"
        style={{ backgroundImage: "url('/placeholder-medical-team.jpg')", transform: 'scale(1.1)' }} // Add a placeholder image in public/
        aria-label="Medical team standing in a hospital hallway"
      ></div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {tagline}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Providing compassionate, advanced, and comprehensive healthcare services 24/7.
        </p>
        <a
          href="#contact"
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          {callToAction}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;