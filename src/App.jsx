// src/App.jsx
import React from 'react';
import Header from './components/Header';
// import Header from "./components/Header"
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import MedicalEquipment from './components/MedicalEquipment';
import OperationsProcedures from './components/OperationsProcedures';
import KeyFeatures from './components/KeyFeatures';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// import { hospitalInfo } from './data/hospitalData'; 
import { hospitalInfo } from './data/hospitalData'; // Importing hospital information


function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <Header hospitalName={hospitalInfo.name} phone={hospitalInfo.phone} />

      <main>
        <HeroSection
          tagline={hospitalInfo.tagline}
          callToAction="Book an Appointment"
        />
        <AboutUs overview={hospitalInfo.overview} />
        <Services
          specialties={hospitalInfo.specialties}
          otherServices={hospitalInfo.otherServices}
        />
        <MedicalEquipment equipment={hospitalInfo.medicalEquipment} />
        <OperationsProcedures procedures={hospitalInfo.operationsProcedures} />
        <KeyFeatures features={hospitalInfo.keyFeatures} />
        <Testimonials testimonials={hospitalInfo.testimonials} />
        <ContactUs
          hospitalInfo={hospitalInfo}
        />
      </main>

      <Footer
        hospitalName={hospitalInfo.name}
        socialMedia={hospitalInfo.socialMedia}
      />
    </div>
  );
}

export default App;