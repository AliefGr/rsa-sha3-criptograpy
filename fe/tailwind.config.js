/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

      extend: {
        animation: {
          gradient: "gradient 15s ease infinite",
          "fade-in": "fadeIn 0.5s ease-out",
          shimmer: "shimmer 2s linear infinite",
        },
        keyframes: {
          gradient: {
            "0%, 100%": {
              "background-size": "400% 400%",
              "background-position": "0% 50%",
            },
            "50%": {
              "background-size": "400% 400%",
              "background-position": "100% 50%",
            },
          },
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          shimmer: {
            "0%": { backgroundPosition: "-200% 0" },
            "100%": { backgroundPosition: "200% 0" },
          },
        },
      },
  },
  plugins: [],
};
