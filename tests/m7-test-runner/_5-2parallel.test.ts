import { test } from "@playwright/test";

test.describe.parallel("Feature A Group", () => {
  test("Test 1", async () => {
    console.log("Test 1");
  });

  test("Test 2", async () => {
    console.log("Test 2");
  });

  test("Test 3", async () => {
    console.log("Test 3");
  });

  test("Test 4", async () => {
    console.log("Test 4");
  });

  test("Test 5", async () => {
    console.log("Test 5");
  });

  test("Test 6", async () => {
    console.log("Test 6");
  });
});
