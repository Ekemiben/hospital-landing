// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = ({ hospitalInfo }) => {
  return (
    <section id="contact" className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Our Location & Contact</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3">
                <hospitalInfo.contactDetails.address.icon className="text-blue-300 text-2xl" />
                {hospitalInfo.contactDetails.address.text}
              </p>
              <p className="flex items-center gap-3">
                <hospitalInfo.contactDetails.phone.icon className="text-blue-300 text-2xl" />
                <a href={`tel:${hospitalInfo.contactDetails.phone.number}`} className="hover:underline">
                  {hospitalInfo.contactDetails.phone.number}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <hospitalInfo.contactDetails.email.icon className="text-blue-300 text-2xl" />
                <a href={`mailto:${hospitalInfo.contactDetails.email.address}`} className="hover:underline">
                  {hospitalInfo.contactDetails.email.address}
                </a>
              </p>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src={hospitalInfo.contactDetails.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mayfield Specialist Hospital Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;