import { defineConfig } from 'checkly' 
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'OTel Take Home',
  logicalId: 'otel-take-home',
  checks: {
    locations: ['af-south-1'],
    browserChecks: {
      testMatch: "__checks__/*.spec.js", 
    },
    playwrightConfigPath: "playwright.config.js",
    playwrightChecks: [
      {
        name: 'Firefox10',
        logicalId: 'firefox-10',
        pwProjects: ['firefox'],
        tags: ['Firefox'],
        frequency: Frequency.EVERY_5M,
        testMatch: "__checks__/playwright.spec.js"
      },
      {
        name: 'Browser - UI Degraded/Failed',
        logicalId: 'ui-degraded-failed',
        tags: ['UI'],
        testMatch: "__checks__/browser.spec.js"
      }
    ]
  },
})