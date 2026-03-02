// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const Header = ({ hospitalName, phone }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-700">
          {hospitalName}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-600 hover:text-blue-700 transition duration-300">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-700 transition duration-300">About Us</a>
          <a href="#services" className="text-gray-600 hover:text-blue-700 transition duration-300">Services</a>
          <a href="#equipment" className="text-gray-600 hover:text-blue-700 transition duration-300">Equipment</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-700 transition duration-300">Contact</a>
          <a href={`tel:${phone}`} className="bg-red-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition duration-300">
            <FaPhoneAlt /> <span>Emergency (24/7)</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-700 transition duration-300 pt-2">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-700 transition duration-300">About Us</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-700 transition duration-300">Services</a>
            <a href="#equipment" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-700 transition duration-300">Equipment</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-700 transition duration-300">Contact</a>
            <a href={`tel:${phone}`} className="bg-red-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition duration-300">
              <FaPhoneAlt /> <span>Emergency (24/7)</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;