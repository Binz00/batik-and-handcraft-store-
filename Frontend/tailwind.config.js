/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       background:"#EEEEEE",
       fontFamily: {
        istockWeb: ["Istok Web", 'sans-serif'], // Custom font family
      },
       colors: {
        customcolor: '#042941', // Example custom color
        button:'#FCCC0A99',
        loginColor: '#5F7C8D',
        logingbutton:'#4B687A',



        
      },
    },
  },
  plugins: [],
}

