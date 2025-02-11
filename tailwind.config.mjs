/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cappuccino: {
          DEFAULT: "#4A3728",
          light: "#6B5141",
        },
        latte: {
          DEFAULT: "#E6DCCD",
          light: "#F0E9E1",
          dark: "#D1C3B0",
        },
        beige: {
          DEFAULT: "#F5EFE7",
          light: "#FAF7F2",
        },
        cream: "#FFFBF7",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4A3728",
          foreground: "#FFFBF7",
        },
        secondary: {
          DEFAULT: "#E6DCCD",
          foreground: "#4A3728",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
