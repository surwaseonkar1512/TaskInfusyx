import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: "#16A8AF", // Main primary color
          secondary: "#D97706", // Main secondary color
          accent: "#14B8A6", // Accent color
          muted: "#6B7280", // Muted color
          danger: "#EF4444", // Danger color
          success: "#10B981", // Success color
          warning: "#F59E0B", // Warning color
          background: "var(--background)", // Background color (custom property)
          foreground: "var(--foreground)", // Foreground color (custom property)
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
