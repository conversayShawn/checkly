import { BrowserCheck, Frequency, RetryStrategyBuilder } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check.js";

new BrowserCheck('intermittent-degrade_fail-browser-check', {
    name: 'intermittent critical browser check',
    group: checklyChallenge,
    frequency: Frequency.EVERY_15M,
    retryStrategy: RetryStrategyBuilder.exponentialStrategy({
        baseBackoffSeconds: 5,
        maxRetries: 2,
        sameRegion: false,
    }),
    tags: ['UI'],
    code:
    {
        entrypoint: new URL('../specs/browser.spec.js', import.meta.url).pathname
    }
})