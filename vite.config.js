import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rainfocus/src/dist/",
  plugins: [react()],
  root: "src",
});
