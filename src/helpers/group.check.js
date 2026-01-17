import { CheckGroupV2 } from 'checkly/constructs'

export const checklyChallenge = new CheckGroupV2('ChecklyChallenge', {
  name: 'Checkly Challenge Group',
  locations: ['af-south-1']
})