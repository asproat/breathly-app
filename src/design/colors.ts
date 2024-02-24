import tailwindColors from "tailwindcss/colors";

// ⚠️⚠️⚠️ REMINDER ⚠️⚠️⚠️
// Whenever you use a Tailwind default color in the app, add it here to facilitate future
// find & replace.
export const colors = {
  "stone-200": tailwindColors.stone[200], // Borders in settings
  "slate-500": tailwindColors.slate[500], // Secondary text in light mode, settings borders
  "slate-600": tailwindColors.slate[600], // Settings stepper border in dark mode
  "slate-700": tailwindColors.slate[700], // Settings bg border in dark mode
  "slate-800": tailwindColors.slate[800], // Primary text in light mode
  "slate-900": tailwindColors.slate[900], // Dark background
  "stone-100": tailwindColors.stone[100], // Light background
  "blue-400": tailwindColors.blue[400], // Android settings tint
  "blue-500": tailwindColors.blue[500], // iOS settings tint
  pastel: {
    orange: "#FF0000", // Home screen planet
    gray: "#FF00FF", // Home screen planet
    green: "#00FF00", // Home screen planet
    "orange-light": "#F1E0D9", // Home screen button
    "gray-light": "#E7E9E6", // Home screen button
  },
};
