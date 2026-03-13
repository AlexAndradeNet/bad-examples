import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginCypress from "eslint-plugin-cypress";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js, pluginCypress }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);
