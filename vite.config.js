import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ToDoApp/", // ← Must be at the root, NOT inside Tailwind plugin
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
