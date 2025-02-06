import { test, chromium } from "@playwright/test";

test.use({
  baseURL: "https://google.com/",
  timezoneId: "America/New_York",
  locale: "es-ES",
  geolocation: { longitude: 12.4, latitude: 41.646 },
  viewport: { width: 600, height: 400 },
  javaScriptEnabled: true, // default, can disable
  acceptDownloads: true, // default, can disable

  actionTimeout: 3000, // browser.newContext()
  navigationTimeout: 5000,
  launchOptions: {
    // browserType.launch()
    slowMo: 2000,
    headless: true,
  },
});

test("Test 1", async ({ page }) => {
  await page.goto("");
  const zone = await getTimeZone(page);
  console.log(zone);
});

test.describe("Group Title", () => {
  test.use({
    timezoneId: "America/Toronto", // Closer to test wins
  });

  test("Test 2", async ({ page }) => {
    await page.goto("");
    const zone = await getTimeZone(page);
    console.log(zone);
  });
});

async function getTimeZone(page) {
  return await page.evaluate(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone
  );
}
