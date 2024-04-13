import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:10000",
        target: "https://resume-builder-api-3i9n.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
