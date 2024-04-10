import { test, expect } from "next/experimental/testmode/playwright/msw";
import { mockSuccessAPIHandlers } from "./mocks/api";
import { mockPrefectures } from "@/tests/mocks/prefectures";

test.beforeEach(async ({ msw, page }) => {
  msw.use(...mockSuccessAPIHandlers);

  await page.goto("/");
});

test("renders the home page", async ({ page }) => {
  await expect(page).toHaveTitle("Poplus");
});

test("if select a checkbox, renders the population chart", async ({ page }) => {
  const tokyoCheckbox = page.getByRole("checkbox", { name: "東京都" });

  await tokyoCheckbox.click();

  const chart = page.getByRole("region");

  await expect(chart).toBeVisible();

  expect(page).toHaveURL("/?prefCode=13");

  await chart.screenshot({
    path: "e2e/screenshots/population-chart.png",
    animations: "allow",
  });
});

test("if select a checkbox in the dialog, renders the population chart", async ({
  page,
}) => {
  await page.goto("/?prefCode=13");
  const dialogButton = page.getByRole("button", {
    expanded: false,
    name: "都道府県の選択 (1)",
  });

  await dialogButton.click();

  const dialog = page.getByRole("dialog");

  expect(dialog).toBeVisible();

  const tokyoCheckbox = page.getByRole("checkbox", { name: "東京都" });

  expect(tokyoCheckbox).toBeChecked();

  const osakaCheckbox = page.getByRole("checkbox", { name: "大阪府" });

  await osakaCheckbox.check();

  await dialog.click();

  const chart = page.getByRole("region");

  await expect(chart).toBeVisible();

  expect(page).toHaveURL("/?prefCode=13&prefCode=27");

  await tokyoCheckbox.uncheck();

  await expect(chart).toBeVisible();

  expect(page).toHaveURL("/?prefCode=27");
});

test("batch toggle  button", async ({ page }) => {
  const dialogButton = page.getByRole("button", {
    expanded: false,
    name: "都道府県の選択",
  });

  await dialogButton.click();

  const dialog = page.getByRole("dialog");

  expect(dialog).toBeVisible();

  const allCheckButton = page.getByRole("link", { name: "すべて選択" });

  await allCheckButton.click();

  const chart = page.getByRole("region");

  await expect(chart).toBeVisible();

  const allURL = mockPrefectures
    .map(({ prefCode }) => `prefCode=${prefCode}`)
    .join("&");
  expect(page).toHaveURL(`/?${allURL}&type=total`);

  const resetButton = page.getByRole("link", { name: "リセット" });

  expect(resetButton).toBeVisible();
  await resetButton.click();

  await expect(chart).toBeHidden();

  expect(page).toHaveURL("/?type=total");
});

test("if hover chart, renders the tooltip", async ({ page }) => {
  await page.goto("/?prefCode=13");

  const chart = page.getByRole("region");

  await chart.hover();

  const tooltip = page.getByRole("tooltip");

  await expect(tooltip).toBeVisible();

  const close = page.getByRole("button", { name: "ツールチップを閉じる" });

  await close.click();

  await expect(tooltip).toBeHidden();
});

test("if change population type, to have new type", async ({ page }) => {
  const typeButton = page.getByRole("button", { name: "総人口" });

  await typeButton.click();

  const dialog = page.getByRole("dialog");

  await expect(dialog).toBeVisible();

  await expect(page.getByRole("link", { name: "総人口" })).toBeVisible();

  const youngLink = page.getByRole("link", {
    name: "年少人口",
  });

  await expect(youngLink).toBeVisible();
  await youngLink.click();

  await expect(dialog).toBeHidden();

  await expect(page).toHaveURL("/?type=young");

  const checkbox = page.getByRole("checkbox", { name: "東京都" });

  await checkbox.click();

  const chart = page.getByRole("region");

  await expect(chart).toBeVisible();

  const label = page.locator(".recharts-label", {
    hasText: "年少人口",
  });

  await expect(label).toBeVisible();

  await chart.screenshot({
    path: "e2e/screenshots/young-population-chart.png",
    animations: "allow",
  });
});

test("redirect test", async ({ page }) => {
  await page.goto("/?prefCode=13");

  await page.waitForURL("/?prefCode=13");

  expect(page.getByRole("region")).toBeVisible();
  expect(page).toHaveURL("/?prefCode=13");
  const dialogButton = page.getByRole("button", {
    expanded: false,
    name: "都道府県の選択 (1)",
  });

  await dialogButton.click();

  const dialog = page.getByRole("dialog");

  expect(dialog).toBeVisible();

  const tokyoCheckbox = page.getByRole("checkbox", { name: "東京都" });

  expect(tokyoCheckbox).toBeChecked();

  await tokyoCheckbox.uncheck();

  await dialog.click();

  await expect(page).toHaveURL("/");

  await page.goto("/?prefCode=13&type=young");

  await page.waitForURL("/?prefCode=13&type=young");

  expect(page.getByRole("region")).toBeVisible();

  await expect(page).toHaveURL("/?prefCode=13&type=young");

  const chart = page.getByRole("region");
  expect(chart).toBeVisible();

  const label = page.locator(".recharts-label", {
    hasText: "年少人口",
  });

  await expect(label).toBeVisible();
});
