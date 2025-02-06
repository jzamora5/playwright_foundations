import { test as setup } from "@playwright/test";

setup.use({});

setup("do teardown", async ({ page }) => {
  console.log("Teardown");
});
