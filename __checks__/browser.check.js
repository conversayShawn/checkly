import { BrowserCheck, Frequency, RetryStrategyBuilder } from "checkly/constructs";

new BrowserCheck('intermittent-degrade_fail-browser-check', {
    name: 'intermittent critical browser check',
    Frequency: Frequency.EVERY_15M,
    retryStrategy: RetryStrategyBuilder.exponentialStrategy({
        baseBackoffSeconds: 5,
        maxRetries: 4,
        sameRegion: false,
    }),
    tags: ['UI'],
    code:
    {
        entrypoint: new URL('browser.spec.js', import.meta.url).pathname
    }
})