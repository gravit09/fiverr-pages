import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ss: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/path/to/your/tailwind.css";`,
      },
    },
  },
});
