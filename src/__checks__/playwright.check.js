import { PlaywrightCheck, RetryStrategyBuilder, Frequency } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check.js";

new PlaywrightCheck('firefox-10', {
    name: '10 firefox tests',
    playwrightConfigPath: "../../playwright.config.js",
    group: checklyChallenge,
    retries: RetryStrategyBuilder.noRetries(),
    pwProjects: ['firefox'],
    tags: ['FIREFOX'],
    frequency: Frequency.EVERY_5M,
    code:
    {
        entrypoint: new URL('../specs/playwright.spec.js', import.meta.url).pathname
    }
})