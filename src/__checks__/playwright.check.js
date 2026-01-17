import { PlaywrightCheck, RetryStrategyBuilder } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check";

new PlaywrightCheck('firefox-10', {
    name: '10 Fire Fox Tests',
    group: checklyChallenge,
    retries: RetryStrategyBuilder.noRetries(),
    pwProjects: ['firefox'],
    tags: ['FIREFOX'],
    frequency: Frequency.EVERY_5M,
    code:
    {
        entrypoint: new URL('playwright.spec.js', import.meta.url).pathname
    }
})