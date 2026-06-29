/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary: deep Prussian ink-navy (scholarly, editorial, not the cliche bright indigo)
        brand: {
          50: "#eef2f7",
          100: "#d7e0ec",
          200: "#aec0d7",
          300: "#7c9bbd",
          400: "#4f739b",
          500: "#345a82",
          600: "#224066",
          700: "#1b3252",
          800: "#172a45",
          900: "#13213a",
        },
        // Secondary: warm ochre / marigold accent (the "discovery" spark)
        accent: {
          50: "#fdf6e9",
          100: "#f9e8c6",
          200: "#f1d18c",
          300: "#e9b751",
          400: "#dd9c2a",
          500: "#c8841f",
          600: "#a86916",
          700: "#854f13",
          800: "#6a4015",
          900: "#5a3815",
        },
        ink: {
          DEFAULT: "#1c1a17",
          soft: "#46413a",
          faint: "#7c756a",
        },
        // Warm paper canvas + hairlines
        canvas: "#f7f3ea",
        line: {
          DEFAULT: "#e8dfce",
          strong: "#d9cdb6",
        },
        // ===== Topik surface palette =====
        // Earth-tone family that harmonizes on warm paper, replaces the
        // bright "candy" Tailwind gradients on topic/category/level heroes.
        // Each hue is deep enough to carry white text. Pair two stops for a
        // hero gradient (mis. from-earth-navy to-earth-ink).
        earth: {
          navy: "#2b4f78",
          ink: "#1b3252",
          ochre: "#c8841f",
          marigold: "#a86916",
          clay: "#b5532f",
          brick: "#8f3f24",
          teal: "#2f7d6b",
          pine: "#1f5e58",
          sage: "#4f7a54",
          moss: "#36603f",
          plum: "#6b4f86",
          aubergine: "#473356",
          slate: "#4d6480",
          cinnamon: "#9a6b3f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Fraunces", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        // crisp, low-offset elevation instead of the generic soft blur
        card: "0 1px 2px rgba(28, 26, 23, 0.05), 0 1px 0 rgba(28, 26, 23, 0.02)",
        lift: "0 12px 28px -12px rgba(28, 26, 23, 0.22)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-in": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
        "draw-in": "draw-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
