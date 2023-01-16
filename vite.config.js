import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    port: 3001,
    strictPort: false,
    fsServe: {
      root: '../'
    }
  },
  resolve: {
  }
};
export default config;
