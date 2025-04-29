// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pr-blue": "#2563eb",
        "pr-darkblue": "#1e40af",
        "pr-gray": "#1f2937",
        "pr-light": "#f3f4f6",
        "pr-lightblue": "#eff6ff",
      },
    },
  },
  plugins: [],
};

export default config;
