import { test, expect } from "@playwright/test";

test("Request / Response Overview", async ({ page }) => {
  const response = await page.goto("");

  if (response === null) return;

  console.log(response.url());
  console.log(response.status());
  console.log(response.ok());

  expect(response.ok()).toBeTruthy();

  console.log(await response.allHeaders());
  console.log(await response.headersArray());

  console.log(await response.body());
  console.log(await response.text());

  // console.log(await response.json()); // Error if not parseable to JSON

  const request = response.request();
  console.log(await request.allHeaders());
  console.log(request.method());
});

test("Request / Response", async ({ request }) => {
  const response = await request.get("https://api.github.com/");

  console.log(response.ok());
  console.log(response.status());

  console.log(await response.headersArray());
  console.log(await response.json());
});
