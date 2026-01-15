import {test, expect} from "@playwright/test"
import { markCheckAsDegraded } from "@checkly/playwright-helpers"

test('intermittent degraded/failed', async ({page}) => {
    await page.goto(process.env.AWS_URL)

    let fakeResponse = Math.random()

    if (fakeResponse < 0.5) {
        markCheckAsDegraded('degraded')
    } else
        throw new Error('failed')
})