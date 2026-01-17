import { CheckGroupV2 } from 'checkly/constructs'
import { customWebhook } from './webhook.check.js'

export const checklyChallenge = new CheckGroupV2('ChecklyChallenge', {
  name: 'Checkly Challenge Group',
  locations: ['af-south-1', 'ca-central-1', 'eu-west-3'],
  alertChannels: [customWebhook]
})