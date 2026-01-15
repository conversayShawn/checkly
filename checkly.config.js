import { defineConfig } from 'checkly' 

export default defineConfig({
  projectName: 'OTel Take Home',
  logicalId: 'otel-take-home',
  checks: {
    locations: ['af-south-1'],
    browserChecks: {
      testMatch: "__checks__/*.spec.js"
    },
  }
})