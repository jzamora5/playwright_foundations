import { test, expect } from "@playwright/test";

test.skip();

test("Will not run 1", async ({ page }) => {
  console.log("Test 1");
});

test("Will not run 2", async ({ page }) => {
  console.log("Test 2");
});

test.fixme("Will not run 3", async ({ page }) => {
  console.log("Test 3");
});

test("Will not run 4", async ({ page }) => {
  test.fail();
  console.log("Test 4");
});
