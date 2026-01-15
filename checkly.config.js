import { defineConfig } from 'checkly'
import { CheckGroupV2 } from 'checkly/constructs'

const group = new CheckGroupV2('ChecklyChallenge', {
  name: 'Checkly Challenge',
  activated: true
})

export default defineConfig({
  projectName: 'Website Monitoring',
  logicalId: 'website-monitoring-1',
})