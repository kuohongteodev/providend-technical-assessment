import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/notes": {
          target: env.VITE_API_URL, // use env variable
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/notes/, ""),
        },
      },
    },
  });
};
