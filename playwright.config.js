import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './src/specs',
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

})