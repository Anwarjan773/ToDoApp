
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        darkMode: "class", // enable class-based dark mode
        theme: { extend: {} },
        content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      },
    }),
  ],
});
