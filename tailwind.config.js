/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
      bg:'#F8F9FA',
        primary: '#ED4C5C',
        landing: '#E2E8F0',
        secondary: '#ED4C5C33',
        tetiary: '#ED4C5C1A', 
        

        // primary: "#EF4444", // Updated to a red shade to match the image
        // secondary: "#8B5CF6", // A lighter purple
        accent: "#10B981", // Green for "Auto-Saving"
        textDark: "#1F2937", // Dark gray
        textMedium: "#4B5563", // Medium gray
        textLight: "#6B7280", // Light gray
        bgLight: "#F3F4F6", // Lighter gray background
        borderLight: "#E5E7EB", // Light border
        cardBg: "#FFFFFF",
              
      },
      fontSize: {
        h1: 'clamp(1.5rem, 6vw, 5rem)',
        h2: 'clamp(1rem, 5vw, 4rem)',
        h3: 'clamp(1.5rem, 4vw, 3rem)',
        h4: 'clamp(1rem, 3vw, 2.5rem)',
        h5: 'clamp(1rem, 3vw, 2rem)',
        body: 'clamp(12px, 3vw, 1rem)',
      },
          
     
    },
  },
  plugins: [],
}
