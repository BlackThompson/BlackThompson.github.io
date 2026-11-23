// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ command }) => ({
//   plugins: [react()],
//   base: command === 'build' ? '/New_Academic_Homepage/' : '/',
//   server: {
//     port: 3000,
//     open: true,
//   },
// }));


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
});
