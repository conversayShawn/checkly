import { PlaywrightCheck, RetryStrategyBuilder, Frequency } from "checkly/constructs";
import { checklyChallenge } from "../helpers/group.check.js";

new PlaywrightCheck('firefox-10', {
    name: '10 firefox tests',
    playwrightConfigPath: "../../playwright.config.js",
    group: checklyChallenge,
    retries: 3,
    pwProjects: 'firefox',
    tags: ['FIREFOX'],
    frequency: Frequency.EVERY_5M,
    testCommand: "npx playwright test src/specs/playwright.spec.js"
})