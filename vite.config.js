import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pre-onboarding-3team-2nd/',
  plugins: [react()],
  server: {
    port: 3000,
  },
});
