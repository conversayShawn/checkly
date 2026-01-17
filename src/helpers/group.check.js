import { CheckGroupV2 } from 'checkly/constructs'
import { customWebhook } from './webhook.check'

export const checklyChallenge = new CheckGroupV2('ChecklyChallenge', {
  name: 'Checkly Challenge Group',
  locations: ['af-south-1'],
  alertChannels: [customWebhook]
})