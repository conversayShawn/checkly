import { defineConfig } from 'checkly' 
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'OTel Take Home',
  logicalId: 'otel-take-home',
  checks: {
    locations: ['af-south-1'],
    browserChecks: {
      testMatch: "__checks__/*.spec.js"
    },
    playwrightConfigPath: "playwright.config.js",
    playwrightChecks: [{
      name: 'Firefox10',
      logicalId: 'firefox-10',
      pwProjects: ['firefox'],
      tags: ['Firefox'],
      frequency: Frequency.EVERY_5M
    }]
  },
})