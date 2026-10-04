import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#0A4D32", deep: "#06301F", soft: "#E3F0E8" },
        leaf: "#1E8A57",
        margin: "#B3202A",
        pencil: "#F5C842",
        paper: "#F6FAF5",
        ink: "#12231B",
        line: "#CFE0D6",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      keyframes: {
        shake: {
          "0%,100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px) rotate(-1deg)" },
          to: { opacity: "1", transform: "translateY(0) rotate(0)" },
        },
      },
      animation: {
        shake: "shake .3s ease-in-out",
        rise: "rise .7s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
