/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14213D", // azul carbón — navbar, textos primarios
          light: "#1F3354",
        },
        paper: "#F5F6F4", // fondo claro principal
        teal: {
          DEFAULT: "#2F6B76", // color secundario, links, acentos
          light: "#3E8B97",
        },
        amber: {
          DEFAULT: "#F2A93B", // color de acción (CTA)
          dark: "#D88E22",
        },
        sage: "#5C8D6B", // acento "eco" — usar con moderación
        slate: "#5B6B79", // texto secundario / muted
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 12px 30px -10px rgba(20, 33, 61, 0.25)",
      },
    },
  },
  plugins: [],
};
