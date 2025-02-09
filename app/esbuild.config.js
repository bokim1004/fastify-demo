import { build } from "esbuild";

build({
  entryPoints: ["./src/index.ts"],
  outdir: "dist",
  target: "node20",
  platform: "node",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
  plugins: [],
});
