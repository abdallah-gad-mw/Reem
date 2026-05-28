import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Server-side CORS & anti-bot bypass API proxy
  app.get("/api/get-featured-projects", async (req, res) => {
    try {
      console.log("Fetching live featured projects from InfinityFree live endpoint...");
      
      const response = await fetch("https://abdallah.infinityfree.me/api/projects.php?featured=1", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/124.0 Chrome/123.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
        }
      });
      
      if (!response.ok) {
        throw new Error(`External server returned non-OK code: ${response.status}`);
      }
      
      const contentType = response.headers.get("content-type") || "";
      const text = await response.text();
      
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Failed to parse external JSON response, raw text was:", text);
        throw new Error("Invalid JSON structure received from the hosting server");
      }
      
      console.log("Successfully fetched from InfinityFree:", typeof data === "object" ? Object.keys(data) : typeof data);
      res.json(data);
    } catch (error: any) {
      console.error("External Projects Fetch Proxy Failure:", error.message);
      res.status(502).json({ 
        status: "error", 
        message: "Failed to fetch from host: " + error.message,
        details: "InfinityFree hosting often requires manual cookie/browser challenges or experienced transient downtime."
      });
    }
  });

  // Serve Vite App for UI routing and code-splitting
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== "true",
        watch: process.env.DISABLE_HMR === "true" ? null : {}
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server live on http://localhost:${PORT}`);
  });
}

startServer();
