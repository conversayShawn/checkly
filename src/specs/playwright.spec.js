import {expect, test} from '@playwright/test'

  
for (let i = 0; i < 10; i++) {
  test(`ffTest${i}`, async ({page}) => {
    await page.goto(`${process.env.AWS_URL}`)
    await expect(page).toHaveTitle(/otel/i)
  })
}
  
  