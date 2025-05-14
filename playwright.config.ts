import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    headless: false,
    baseURL: 'http://localhost:5173',
  },
});
