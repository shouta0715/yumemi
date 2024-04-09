import { test, expect } from "next/experimental/testmode/playwright/msw";
import { mockFontHandlers } from "./mocks/api/google-fonts";
import { mockPopulationHandler } from "./mocks/api/populations";
import { mockPrefecturesHandler } from "./mocks/api/prefectures";

test("error page 400", async ({ page, msw }) => {
  await page.goto("/not-found");

  await expect(page.locator("h2")).toHaveText("Page Not Found");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler({
      status: 400,
    })
  );

  await page.goto("/?prefCode=13");

  await expect(page.locator("h2")).toHaveText("Bad Request");
});

test("error page 401", async ({ page, msw }) => {
  await page.goto("/");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler({
      status: 401,
    })
  );

  await page.goto("/?prefCode=13");

  await expect(page.locator("h2")).toHaveText("Authorization Error");
});

test("error page 403", async ({ page, msw }) => {
  await page.goto("/");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler({
      status: 403,
    })
  );

  await page.goto("/?prefCode=13");

  await expect(page.locator("h2")).toHaveText("Forbidden");
});

test("error page 404", async ({ page, msw }) => {
  await page.goto("/");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler({
      status: 404,
    })
  );

  await page.goto("/?prefCode=13");

  await expect(page.locator("h2")).toHaveText("Not Found");
});

test("error page 429", async ({ page, msw }) => {
  await page.goto("/");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler({
      status: 429,
    })
  );

  await page.goto("/?prefCode=13");

  await expect(page.locator("h2")).toHaveText("Too Many Requests");
});

test("error page 500", async ({ page, msw }) => {
  await page.goto("/");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler({
      status: 500,
    })
  );

  await page.goto("/?prefCode=13");

  await expect(page.locator("h2")).toHaveText("Internal Server Error");
});

test("error component", async ({ page, msw }) => {
  await page.goto("/");

  msw.use(
    ...mockFontHandlers(),
    mockPrefecturesHandler(),
    mockPopulationHandler({
      status: 500,
    })
  );

  await expect(page.locator("h2")).toHaveText("Something went wrong");
});
