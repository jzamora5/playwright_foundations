import { test, expect } from "@playwright/test";

test.skip("Will not run", async ({ page }) => {
  console.log("This should not be printed");
});

test("Skip (un)conditionally", async ({ page, browserName }) => {
  test.skip(
    browserName === "chromium",
    "Does not work in Chromium, ticket ABC-123"
  );

  test.skip((await page.getByTestId("someId").count()) === 0);
});

test.fixme("Fixme", async ({ page }) => {
  console.log("This should not be printed");
});

test("Will fail", async ({ page }) => {
  test.fail(); // the test SHOULD fail

  expect(2).toEqual(3);
});
