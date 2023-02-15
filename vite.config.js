import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rainfocus/src/",
  plugins: [react()],
  root: "src",
});
