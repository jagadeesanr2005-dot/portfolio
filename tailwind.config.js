/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0F19",
        card: "#151B26",
        primary: "#10B981",
        secondary: "#34D399",
        success: "#10B981",
        ink: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
        "grad-radial": "radial-gradient(circle at top, rgba(16,185,129,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 42px rgba(16,185,129,0.24)",
        card: "0 18px 60px rgba(0,0,0,0.34)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease infinite",
      },
    },
  },
  plugins: [],
};
