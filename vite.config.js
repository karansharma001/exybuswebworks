// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";

// export default defineConfig(({ command }) => ({
//   plugins: [react(), tailwindcss()],
//   base: command === "build" ? "/exybuswebworks/" : "/",  // <-- magic here
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: "/",   // <-- set root since custom domain is root
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
