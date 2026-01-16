import { defineConfig } from 'checkly' 
import { Frequency, CheckGroupV2 } from 'checkly/constructs'

const checklyChallenge = new CheckGroupV2('checkly-challenge', {
  name: 'ChecklyChallenge',
  locations: ['af-south-1']
})

export default defineConfig({
  projectName: 'OTel Take Home',
  logicalId: 'otel-take-home',
  repoUrl: 'https://github.com/conversayShawn/checkly',
  checks: {
    browserChecks: {
      group: 'checkly-challenge',
      testMatch: "__checks__/*.check.js", 
    },
    playwrightConfigPath: "playwright.config.js",
    playwrightChecks: [
      {
        group: 'checkly-challenge',
        name: '10 Fire Fox Tests',
        logicalId: 'firefox-10',
        pwProjects: ['firefox'],
        tags: ['Firefox'],
        frequency: Frequency.EVERY_5M,
        testMatch: "__checks__/playwright.spec.js"
      },
    ]
  }
})