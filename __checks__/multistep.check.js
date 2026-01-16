import { BrowserCheck, Frequency, RetryStrategyBuilder } from "checkly/constructs";

new BrowserCheck('multistep-browser-check', {
    name: 'multistep browser check',
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