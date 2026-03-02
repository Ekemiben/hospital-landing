// src/components/KeyFeatures.jsx
import React from 'react';

const KeyFeatures = ({ features }) => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Why Choose Mayfield Specialist Hospital?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <feature.icon className="text-5xl text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <img
              src="/placeholder-hospital-hallway.jpg" // Add a placeholder image in public/
              alt="Clean and modern hospital hallway"
              className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
            />
            <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
              Our commitment to excellence, patient safety, and continuous improvement makes us a leading choice for your healthcare needs.
            </p>
          </div>
      </div>
    </section>
  );
};

export default KeyFeatures;