import { ApiCheck, RetryStrategyBuilder } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check.js";

new ApiCheck('private-location-api-check', {
    name: 'private location api check',
    privateLocations: ['private-checkly-challenge'],
    group: checklyChallenge,
    retryStrategy: RetryStrategyBuilder.exponentialStrategy({
        baseBackoffSeconds: 5,
        maxRetries: 2,
        sameRegion: false,
    }),
    request: {
        method: 'GET',
        url: '{{PRIVATE_AWS_URL}}:8080',
    }
})