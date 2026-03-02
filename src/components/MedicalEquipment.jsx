// src/components/MedicalEquipment.jsx
import React from 'react';

const MedicalEquipment = ({ equipment }) => {
  // Group equipment by category for potential different display styles
  const diagnosticEquipment = equipment.filter(item => item.category === 'Diagnostic');
  const treatmentEquipment = equipment.filter(item => item.category === 'Treatment');

  return (
    <section id="equipment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Advanced Medical Equipment & Technology
        </h2>

        {/* Diagnostic Equipment */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            Diagnostic & Imaging
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticEquipment.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                <item.icon className="text-5xl text-purple-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <img
              src="/placeholder-diagnostic-room.jpg" // Add a placeholder image in public/
              alt="Advanced Diagnostic Room"
              className="rounded-lg shadow-xl mx-auto w-full max-w-3xl"
            />
             <p className="mt-4 text-gray-600 italic">Our cutting-edge diagnostic tools ensure accurate and timely results.</p>
          </div>
        </div>

        {/* Treatment & Support Equipment */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            Treatment & Support Systems
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentEquipment.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                <item.icon className="text-5xl text-orange-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <img
              src="/placeholder-operating-room.jpg" // Add a placeholder image in public/
              alt="State-of-the-art Operating Theatre"
              className="rounded-lg shadow-xl mx-auto w-full max-w-3xl"
            />
            <p className="mt-4 text-gray-600 italic">Equipped with international standard operating theatres for complex surgeries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalEquipment;