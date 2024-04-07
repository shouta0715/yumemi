import { test, expect } from "next/experimental/testmode/playwright/msw";
import { mockSuccessAPIHandlers } from "./mocks/api";

test.beforeEach(async ({ msw, page }) => {
  msw.use(...mockSuccessAPIHandlers);

  await page.goto("/");
});

test("renders the home page", async ({ page }) => {
  await expect(page).toHaveTitle("Poplus");
});
