import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function ramApiPlugin(): Plugin {
  return {
    name: "ram-api",

    configurePreviewServer(server) {
      server.middlewares.use("/api/get-ram", (_req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(
          JSON.stringify({
            ram_mb: 1024
          })
        );
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    ramApiPlugin()
  ]
});
