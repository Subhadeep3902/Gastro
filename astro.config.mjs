import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import jsx from '@vitejs/plugin-vue';

// https://astro.build/config
export default defineConfig({
  site: "https://gastro-loki.netlify.app/",
  plugins: [jsx()],
  integrations: [
    mdx(),
    sitemap(),
    react({
      include: ["**/react/*"],
    }),
  ],
});
