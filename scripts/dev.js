// Kills anything on port 3000, then starts Next.js dev server.
const { execSync, spawn } = require("child_process");
const path = require("path");

const PORT = 3000;
const ROOT = path.join(__dirname, "..");

// ── Kill port 3000 ────────────────────────────────────────
try {
  if (process.platform === "win32") {
    const out = execSync(`netstat -ano | findstr :${PORT}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
    const pids = [
      ...new Set(
        out.split("\n")
          .map((l) => l.trim().split(/\s+/).pop())
          .filter((p) => p && /^\d+$/.test(p) && p !== "0")
      ),
    ];
    pids.forEach((pid) => {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
        console.log(`[dev] Freed port ${PORT} (killed PID ${pid})`);
      } catch (_) {}
    });
  } else {
    execSync(`lsof -ti:${PORT} | xargs kill -9 2>/dev/null || true`, { stdio: "ignore" });
  }
} catch (_) {
  // Port was already free
}

// ── Start Next.js ─────────────────────────────────────────
// Use a relative path (no spaces) with cwd set to project root.
const args = process.platform === "win32"
  ? ["cmd.exe", ["/c", "node_modules\\.bin\\next.cmd", "dev"]]
  : ["node_modules/.bin/next", ["dev"]];

const next = spawn(args[0], args[1], { stdio: "inherit", cwd: ROOT });
next.on("exit", (code) => process.exit(code ?? 0));
