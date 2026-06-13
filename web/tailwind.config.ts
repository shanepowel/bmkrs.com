import type { Config } from "tailwindcss";
import bmkrsPreset from "@bmkrs/ui/tailwind";

const config: Config = {
  presets: [bmkrsPreset as Config],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
