// src/components/AboutUs.jsx
import React from 'react';
import Mayfield from '../assets/Mayfield.jpeg'; // Add a placeholder logo in src/assets/

const AboutUs = ({ overview }) => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Mayfield}
            alt="Hospital reception area"
            className="rounded-lg shadow-xl w-full max-w-md md:max-w-none transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Welcome to Mayfield Specialist Hospital
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {overview}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are dedicated to offering world-class medical services with a focus on patient well-being and cutting-edge technology. Our team of experienced professionals is here for you, around the clock.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;