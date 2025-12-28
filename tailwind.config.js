/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dongle: ['var(--font-dongle)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGray: "#86868b",
        phoenixRed: "#FF5858",
        skyBlue: "#057897",
        mountbattenPink: "#8B728E",
        hoverBlue: "rgba(108, 211, 239, 0.28)",
      },
      boxShadow: {
        // 'custom-glow' will be the utility class: shadow-custom-glow
        'button-glow': '0 0 44px 0 rgba(108, 211, 239, 0.44)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px 10px rgba(5, 120, 151, 0.8)'
          },
          '50%': {
            boxShadow: '0 0 30px 15px rgba(5, 120, 151, 1)'
          } 
        },
      },
    },
  },
  plugins: [],
};
