import { test, expect } from "@playwright/test";
import fs from "fs";

test("Download a Single file and assert", async ({ page }) => {
  await page.goto("/savings.html");

  const downloadPromise = page.waitForEvent("download");

  await page.getByText("Download our offer").click();

  const download = await downloadPromise;
  // Fails in Non headless mode because of the pdf preview

  const suggestedFileName = download.suggestedFilename();
  const filePath = "download" + suggestedFileName;
  // await download.saveAs(filePath);

  expect(await download.failure()).toBeNull();

  expect(fs.existsSync(filePath)).toBeTruthy();

  const fileSizeInBytes = fs.statSync(filePath).size;
  console.log(fileSizeInBytes);
  expect(fileSizeInBytes).toBeLessThan(20_000);
});

test("Upload", async ({ page }) => {
  await page.goto("/loans.html");

  const uploadInput = page.locator('input[type="file"]');

  // await uploadInput.setInputFiles(["download/dummy.pdf", "other.file"]);

  await uploadInput.setInputFiles("download/dummy.pdf");

  // clear
  await uploadInput.setInputFiles([]);

  // submit
});
