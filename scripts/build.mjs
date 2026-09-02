import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const isWindows = process.platform === "win32";
const command = isWindows ? process.execPath : "bash";
const args = isWindows
  ? [fileURLToPath(new URL("../node_modules/vinext/dist/cli.js", import.meta.url)), "build"]
  : [fileURLToPath(new URL("./build-verified.sh", import.meta.url))];

const result = spawnSync(command, args, { stdio: "inherit" });

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
