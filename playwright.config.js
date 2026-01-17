import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: '__checks__/*.spec.js',
  use: {
    baseURL: 'http://3.143.230.92:8080',
  },
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

})