import sharedConfig from "@hairy-studios/tailwind-config";

import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  presets: [sharedConfig],
};
export default config;
