// src/data/hospitalData.js

import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export const hospitalInfo = {
  name: "Mayfield Specialist Hospital",
  location: "Sun City Estate, Abuja, FCT, Nigeria",
  phone: "+234 908 712 1602",
  email: "info@mayfieldhospital.com",
  tagline:
    "Your Health, Our Priority – Advanced Care, Compassionate Hands.",
  overview:
    "Mayfield Specialist Hospital Abuja is a multi-specialty hospital with 250-300+ bed capacity offering a broad range of medical services and advanced healthcare technology. It operates 24/7 and aims to provide quality care across many specialties, diagnostics, and emergency services.",

  specialties: [
    { name: "Cardiology", icon: FaIcons.FaHeartbeat },
    { name: "Kidney Centre / Nephrology", icon: FaIcons.FaProcedures },
    { name: "Cancer Centre / Oncology", icon: FaIcons.FaRibbon },
    { name: "Burns & Plastic Surgery", icon: FaIcons.FaFire },
    { name: "Eye Care / Ophthalmology", icon: FaIcons.FaEye },
    { name: "Dentistry / Dental Surgery", icon: FaIcons.FaTooth },
    { name: "Obstetrics & Gynaecology", icon: FaIcons.FaBaby },
    { name: "Pediatrics & Neonatology", icon: FaIcons.FaChild },
    { name: "General & Internal Medicine", icon: FaIcons.FaStethoscope },
    { name: "Orthopedics & Spinal Surgery", icon: FaIcons.FaBone },
    { name: "ENT (Ear, Nose & Throat)", icon: FaIcons.FaEar },
    { name: "Dermatology", icon: FaIcons.FaSpa },
    { name: "Neurology", icon: FaIcons.FaBrain },
    { name: "Physiotherapy & Rehabilitation", icon: FaIcons.FaHandsHelping },
    { name: "Diabetes Centre / Chronic Illness Care", icon: FaIcons.FaSyringe },
    { name: "Emergency & Trauma Care", icon: FaIcons.FaAmbulance },
  ],

  otherServices: [
    { name: "Outpatient & Inpatient Consultations", icon: FaIcons.FaUserMd },
    { name: "Comprehensive Health Checkups", icon: FaIcons.FaClipboardCheck },
    { name: "Ambulance Services (24/7)", icon: FaIcons.FaAmbulance },
    { name: "Intensive Care Unit (ICU)", icon: FaIcons.FaHeartbeat },
    { name: "Blood Bank Services", icon: FaIcons.FaTint },
    { name: "Radiology & Imaging Services", icon: FaIcons.FaXRay },
  ],

  medicalEquipment: [
    { name: "Automated Laboratory Equipment", category: "Diagnostic", icon: FaIcons.FaMicroscope },
    { name: "Digital X-ray Machines (fixed and mobile)", category: "Diagnostic", icon: FaIcons.FaXRay },
    { name: "Ultrasound with 4D color Doppler", category: "Diagnostic", icon: FaIcons.FaSearch },
    { name: "ECG and Mobile ECG machines", category: "Diagnostic", icon: FaIcons.FaHeartbeat },
    { name: "Mammography machine", category: "Diagnostic", icon: FaIcons.FaFemale },
    { name: "State-of-the-art Operating Theatres", category: "Treatment", icon: FaIcons.FaHospital },
    { name: "Life Support Ventilators in emergency and ICU", category: "Treatment", icon: FaIcons.FaLungs },
    { name: "Central oxygen & suction systems", category: "Treatment", icon: MdIcons.MdOutlineMedicalServices },
    { name: "Incubators & radiant warmers (for neonatal care)", category: "Treatment", icon: FaIcons.FaBabyCarriage },
  ],

  operationsProcedures: [
    { name: "General surgery & laparoscopic surgery", icon: FaIcons.FaCut },
    { name: "Neurosurgery and orthopedics", icon: FaIcons.FaBrain },
    { name: "ENT and Gastrointestinal procedures", icon: FaIcons.FaEar },
    { name: "Obstetric and gynecologic operations", icon: FaIcons.FaBaby },
    { name: "Joint replacement & sports medicine procedures", icon: FaIcons.FaBone },
    { name: "Trauma and critical care interventions", icon: FaIcons.FaAmbulance },
    { name: "Cancer treatments and renal procedures", icon: FaIcons.FaRibbon },
    { name: "Specialized eye and dental procedures", icon: FaIcons.FaEye },
  ],

  keyFeatures: [
    { title: "Facility Size & Structure", description: "250–300+ bed multi-specialty hospital.", icon: FaIcons.FaBuilding },
    { title: "Advanced Medical Equipment", description: "Latest diagnostic machines (X-ray, ultrasound, ECG, lab automation).", icon: FaIcons.FaStethoscope },
    { title: "Emergency & Critical Care", description: "ICU, ventilators, emergency trauma center open 24/7.", icon: FaIcons.FaAmbulance },
    { title: "Comprehensive Specialty Care", description: "Organ-based services, surgical suites, women & children care.", icon: FaIcons.FaHospital },
    { title: "Ambulance & Support Services", description: "Ambulance life support services, integrated blood bank, neonatal care systems.", icon: FaIcons.FaHeartbeat },
    { title: "24/7 Availability", description: "Always open for your medical needs.", icon: FaIcons.FaRegClock },
    { title: "Compassionate Care", description: "Our dedicated team provides patient-centric care.", icon: FaIcons.FaHeartbeat },
    { title: "Experienced Professionals", description: "Highly skilled doctors and staff.", icon: FaIcons.FaUserFriends },
  ],

  testimonials: [
    { quote: "The care I received at Mayfield was exceptional. The doctors and nurses were incredibly attentive and professional.", author: "Aisha M." },
    { quote: "Mayfield Specialist Hospital offers state-of-the-art facilities and a compassionate team.", author: "Kunle A." },
    { quote: "From emergency care to follow-up, the service was seamless and outstanding.", author: "Grace O." },
    { quote: "I was very impressed with the advanced equipment and the knowledgeable staff.", author: "Chike E." },
  ],

  socialMedia: {
    facebook: { link: "https://www.facebook.com/mayfieldhospital", icon: FaIcons.FaFacebook },
    instagram: { link: "https://www.instagram.com/mayfieldhospital", icon: FaIcons.FaInstagram },
    linkedin: { link: "https://www.linkedin.com/company/padiyath-mayfield-hospital", icon: FaIcons.FaLinkedin },
  },

  contactDetails: {
    phone: { number: "+234 908 712 1602", icon: FaIcons.FaPhoneAlt },
    email: { address: "info@mayfieldhospital.com", icon: FaIcons.FaEnvelope },
    address: { text: "Sun City Estate, Abuja, FCT, Nigeria", icon: FaIcons.FaMapMarkerAlt },
    mapEmbedUrl:
      "https://www.google.com/maps/place/Mayfield+Specialist+Hospital/@8.988453,7.4326858,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMZbOWg-wXMnqvarX3MF3NbICewwitDioqhwGYH!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMZbOWg-wXMnqvarX3MF3NbICewwitDioqhwGYH%3Dw203-h152-k-no!7i4048!8i3032!4m7!3m6!1s0x104e732c01a1f585:0x811d72e19aa891ab!8m2!3d8.9880751!4d7.432606!10e5!16s%2Fg%2F11cp5r4855?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
  },
};