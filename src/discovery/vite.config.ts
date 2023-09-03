import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const setAssetPrefixPlugin = (prefix) => ({
  name: "add-prefix-plugin",
  async transformIndexHtml(html) {
    return html.replace(/(href|src)="(?!http|\/\/)/g, `$1="${prefix}`);
  },
});

const DEFAULT_ASSET_PREFIX = ".";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), setAssetPrefixPlugin(DEFAULT_ASSET_PREFIX)],
  build: {
    outDir: "../../dist/pages/discovery",
  },
});
