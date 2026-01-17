import { test, expect } from "@playwright/test";
import { markCheckAsDegraded } from "@checkly/playwright-helpers";

test("intermittent degraded/failed", async ({ page }) => {
  await page.goto(process.env.AWS_URL);

  await page.getByRole("button", { name: /Go Shopping/ }).click();
  await page
    .getByRole("link", { name: /Starsense Explorer Refractor/ })
    .click();
  await page.getByRole("button", { name: /Add To Cart/ }).click();
  await expect(page.locator("#email")).not.toBeEmpty();
  await expect(page.locator("#street_address")).not.toBeEmpty();
  await expect(page.locator("#zip_code")).not.toBeEmpty();
  await expect(page.locator("#city")).not.toBeEmpty();
  await expect(page.locator("#state")).not.toBeEmpty();
  await expect(page.locator("#country")).not.toBeEmpty();
  await expect(page.locator("#credit_card_number")).not.toBeEmpty();
  await expect(page.locator("#credit_card_expiration_month")).not.toBeEmpty();
  await expect(page.locator("#credit_card_expiration_year")).not.toBeEmpty();
  await expect(page.locator("#credit_card_cvv")).not.toBeEmpty();
  await page.getByRole("button", { name: "Place Order" }).click();

  let fakeResponse = Math.random();

  if (fakeResponse < 0.5) {
    markCheckAsDegraded("degraded");
  } else if (fakeResponse > 0.7) {
    throw new Error("failed");
  }
});