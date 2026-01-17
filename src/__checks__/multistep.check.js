import { Frequency, MultiStepCheck, RetryStrategyBuilder } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check.js";

new MultiStepCheck('multistep-browser-check', {
    name: 'multistep browser check',
    group: checklyChallenge,
    frequency: Frequency.EVERY_12H,
    retryStrategy: RetryStrategyBuilder.linearStrategy({
        baseBackoffSeconds: 15, 
        maxRetries: 3,
        sameRegion: true, 
    }),
    tags: ['DEGRADED'],

    code:
    {
        entrypoint: new URL('../specs/multistep.spec.js', import.meta.url).pathname
    }
})