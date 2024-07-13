import { defineConfig } from "tsup";

const isProduction = process.env["NODE_ENV"] === "production";

export default defineConfig({
  clean: true,
  dts: true,
  entry: {
    index: "src/index.ts",
  },
  external: [],
  format: ["cjs", "esm"],
  minify: false,
  sourcemap: isProduction,
});
