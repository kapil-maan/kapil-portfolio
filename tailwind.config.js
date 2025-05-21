/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
    },
    
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#B63E96", // 240,86,199
      primaryDark: "#58E6D9", // 80,230,217
    },
    keyframes: {
      glow: {
        '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 5px yellow)' },
        '50%': { opacity: '0.5', filter: 'drop-shadow(0 0 20px yellow)' },
      },
    },
    animation: {
      'spin-slow' : 'spin 9s linear infinite',
        glow: 'glow 1.5s infinite',
    },
    backgroundImage: {
    circularLight:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

    circularDark:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

    circularLightLg:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

    circularDarkLg:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

    circularLightMd:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

    circularDarkMd:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

    circularLightSm:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

    circularDarkSm:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
    },
    screens: {
      "2xl": { max: "1535px" , min: "1280px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" ,min:"1024px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px", min: "768px"},
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" , min: "640px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" , min:"480px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" , min: "0px"},
      // => @media (max-width: 479px) { ... }
  }
  },
  plugins: [],
  }
}
