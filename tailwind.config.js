/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact color palette matching vikaschoudhary.vercel.app screenshot
        bgCanvas: "#F5F2EB",       // Exact light linen/cream background from screenshot
        bgCanvasBlue: "#F0F4F8",   // Mild blue background variant
        navWhite: "#FFFFFF",       // Pure white nav header
        cardWhite: "#FFFFFF",      // Card containers
        borderLight: "#E5E0D8",    // Subtle natural border
        borderBlue: "#D3E0EA",     // Mild blue border
        textDark: "#1C1917",       // Deep charcoal text from screenshot
        textBody: "#38342F",       // Body text from screenshot
        textMuted: "#7A7368",      // Label text from screenshot (#7A7368)
        accentGreen: "#3B4D3C",    // Sample active green/olive accent
        accentBlue: "#1E3A8A",     // Deep navy accent
        accentAmber: "#B45309",    // Amber accent
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        photoCard: '0 12px 32px -4px rgba(28, 25, 23, 0.12), 0 4px 12px -2px rgba(28, 25, 23, 0.06)',
        softCard: '0 2px 12px -2px rgba(28, 25, 23, 0.04), 0 1px 4px -1px rgba(28, 25, 23, 0.02)',
      }
    },
  },
  plugins: [],
}
