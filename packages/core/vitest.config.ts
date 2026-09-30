import { defineConfig } from "vitest/config";
import path from "path";
import fs from "fs";

const rootEnv = path.resolve(__dirname, "../../.env");
if (fs.existsSync(rootEnv)) {
  process.loadEnvFile(rootEnv);
}

export default defineConfig({
  test: {
    testTimeout: 30000
  }
});
