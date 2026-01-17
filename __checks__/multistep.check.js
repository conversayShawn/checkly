import { Frequency, MultiStepCheck, RetryStrategyBuilder } from "checkly/constructs";
import { checklyChallenge } from "./group.check";

new MultiStepCheck('multistep-browser-check', {
    name: 'multistep browser check',
    group: checklyChallenge,
    Frequency: Frequency.EVERY_12H,
    retryStrategy: RetryStrategyBuilder.linearStrategy({
        baseBackoffSeconds: 15, 
        maxRetries: 3,
        sameRegion: true, 
    }),
    tags: ['DEGRADED'],

    code:
    {
        entrypoint: new URL('multistep.spec.js', import.meta.url).pathname
    }
})