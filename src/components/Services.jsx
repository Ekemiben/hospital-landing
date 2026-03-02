// src/components/Services.jsx
import React from "react";
import { FaHospitalSymbol } from "react-icons/fa"; // fallback icon

const Services = ({ specialties = [], otherServices = [] }) => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Our Comprehensive Services
        </h2>

        {/* Specialty Units */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            Specialty Units
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {specialties.map((service, index) => {
              const Icon = service?.icon || FaHospitalSymbol;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center group"
                >
                  {Icon && (
                    <Icon className="text-5xl text-blue-500 mb-4 group-hover:text-blue-700 transition-colors duration-300" />
                  )}

                  <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                    {service?.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Services */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            Other Important Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => {
              const Icon = service?.icon || FaHospitalSymbol;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 group"
                >
                  {Icon && (
                    <Icon className="text-4xl text-green-500 group-hover:text-green-700 transition-colors duration-300 flex-shrink-0" />
                  )}

                  <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                    {service?.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;