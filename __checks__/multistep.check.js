import { BrowserCheck, Frequency } from "checkly/constructs";

new BrowserCheck('multistep-browser-check', {
    name: 'multistep browser check',
    Frequency: Frequency.EVERY_12H,
    tags: ['DEGRADED'],
    code:
    {
        entrypoint: new URL('multistep.spec.js', import.meta.url).pathname
    }
})