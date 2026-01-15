import {test} from "@playwright/test"
import { markCheckAsDegraded } from "@checkly/playwright-helpers"

test.only('intermittent degraded/failed', async ({}) => {
    let fakeResponse = Math.random()

    if (fakeResponse < 0.5) {
        markCheckAsDegraded('degraded')
    } else
        throw new Error('failed')
})