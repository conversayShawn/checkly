import {expect, test} from '@playwright/test'

  
for (let i = 0; i < 10; i++) {
  test(`ffTest${i}`, async ({page}) => {
    await page.goto('http://3.143.230.92:8080/')
    await expect(page).toHaveTitle(/otel/i)
  })
}
  
  