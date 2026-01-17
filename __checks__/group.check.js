import { CheckGroupV2 } from 'checkly/constructs'

export const checklyChallenge = new CheckGroupV2('checklyChallenge', {
  name: 'ChecklyChallenge',
  locations: ['af-south-1']
})