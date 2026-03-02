// src/components/Testimonials.jsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          What Our Patients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative flex flex-col">
              <FaQuoteLeft className="text-blue-300 text-5xl absolute top-4 left-4 opacity-30" />
              <p className="text-lg text-gray-700 italic mb-4 relative z-10 pl-10">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-blue-700 text-right mt-auto">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <img
            src="/placeholder-happy-patient.jpg" // Add a placeholder image in public/
            alt="Happy patient with a medical professional"
            className="rounded-lg shadow-xl mx-auto w-full max-w-3xl"
          />
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            We are proud of the positive impact we have on our patients' lives and are committed to maintaining the highest standards of care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;