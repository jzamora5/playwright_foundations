import { test, expect } from "@playwright/test";

// 1) Create repo via web API
// 2) Go to UI and check it exists

const REPO = "Playwright-Test-Repo";

test.use({
  baseURL: "https://api.github.com/",
  extraHTTPHeaders: {
    Accept: "application/vnd.github.v3+json",
    Authorization: "token ghp_123",
  },
});

test.beforeEach("Create repo", async ({ request }) => {
  const response = await request.post("users/repos", {
    data: {
      name: REPO,
    },
  });

  expect(response.ok()).toBeTruthy();
});

test("Work with newly created repo", async ({ page }) => {
  await page.goto("https://github.com/jzamora5?tab=respositories");

  await expect(page.getByRole("link", { name: REPO })).toHaveCount(1);

  // other actions with a clean, new repo
});

test.afterEach("Delete repo", async ({ request }) => {
  const response = await request.delete(`repos/jzamora5/${REPO}`, {});

  expect(response.ok()).toBeTruthy();
  expect(response.status() === 204).toBeTruthy();
});
