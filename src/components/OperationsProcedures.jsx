// src/components/OperationsProcedures.jsx
import React from 'react';

const OperationsProcedures = ({ procedures }) => {
  return (
    <section id="procedures" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Operations & Procedures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 group"
            >
              <procedure.icon className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0" />
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                {procedure.name}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <img
            src="/placeholder-surgical-team.jpg" // Add a placeholder image in public/
            alt="Surgical team performing an operation"
            className="rounded-lg shadow-xl mx-auto w-full max-w-4xl"
          />
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Our highly skilled surgical teams perform a wide range of advanced procedures using the latest techniques and equipment, ensuring optimal patient outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperationsProcedures;