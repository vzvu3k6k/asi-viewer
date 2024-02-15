import { test, expect } from "@playwright/test";

test("basic", async ({ page }, testInfo) => {
  await page.goto("/");

  if (testInfo.config.updateSnapshots === "all") {
    // Wait enough for the editor to initialize
    await new Promise((r) => setTimeout(r, 5000));
  }

  await expect(async () => {
    // Compare HTML instead of the screenshot
    // to avoid rendering differences due to font variations across environments
    expect(
      await page.locator('[data-test="monaco"]').innerHTML()
    ).toMatchSnapshot({
      // Without name, basic-chromium-linux-1.html, basic-chromium-linux-2.html, ... will be created on each retry.
      name: "basic.html",
    });
  }).toPass();
});
