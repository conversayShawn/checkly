import { BrowserCheck, Frequency } from "checkly/constructs";

new BrowserCheck('intermittent-degrade_fail-browser-check', {
    name: 'intermittent critical browser check',
    Frequency: Frequency.EVERY_1M,
    tags: ['UI'],
    code:
    {
        entrypoint: new URL('browser.spec.js', import.meta.url).pathname
    }
})