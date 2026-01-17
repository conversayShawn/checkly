import { defineConfig } from 'checkly' 

export default defineConfig({
  projectName: 'OTel Take Home',
  logicalId: 'otel-take-home',
  repoUrl: 'https://github.com/conversayShawn/checkly',
  checks: {
    playwrightConfigPath: 'playwright.config.js',
    runtimeId: '2025.04',
  },
})