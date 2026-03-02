// src/components/Footer.jsx
import React from 'react';

const Footer = ({ hospitalName, socialMedia }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {hospitalName}. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {socialMedia.facebook && (
            <a href={socialMedia.facebook.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <socialMedia.facebook.icon className="w-6 h-6" />
            </a>
          )}
          {socialMedia.instagram && (
            <a href={socialMedia.instagram.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
              <socialMedia.instagram.icon className="w-6 h-6" />
            </a>
          )}
          {socialMedia.linkedin && (
            <a href={socialMedia.linkedin.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
              <socialMedia.linkedin.icon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;