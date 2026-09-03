import http from "node:http";
import fs from "node:fs";
import path from "node:path";

export function startFixtureServer(port: number = 8765): http.Server {
  const baseDir = path.resolve("evals/fixtures/mediocre-app");

  const server = http.createServer((req, res) => {
    let reqPath = req.url || "/";
    if (reqPath === "/") reqPath = "/index.html";

    const filePath = path.join(baseDir, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      let contentType = "text/html";
      if (ext === ".css") contentType = "text/css";
      else if (ext === ".js") contentType = "text/javascript";

      res.writeHead(200, { "Content-Type": contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  });

  server.listen(port);
  return server;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const server = startFixtureServer(8765);
  console.log(`Fixture server listening on http://localhost:8765/`);
}
