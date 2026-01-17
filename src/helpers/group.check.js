import { CheckGroupV2 } from 'checkly/constructs'
import { customWebhook } from './webhook.check.js'

export const checklyChallenge = new CheckGroupV2('ChecklyChallenge', {
  name: 'Checkly Challenge Group',
  alertChannels: [customWebhook],
  privateLocations: ['private-checkly-challenge'],
})