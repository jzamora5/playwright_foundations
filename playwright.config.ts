import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  // fullyParallel: true,

  expect: {
    timeout: 5000,
  },

  use: {
    trace: "on-first-retry",

    baseURL: "http://localhost:3000/",
    screenshot: "only-on-failure",
    headless: false,
    launchOptions: {
      slowMo: 1000,
    },
  },

  webServer: {
    command: "npm start",
    url: "http://localhost:3000/",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        ...devices["iPhone 12"],
      },
      testDir: "./tests/mobile",
    },

    {
      name: "Smoke",
      testMatch: /.*smoke.test.ts/,
      retries: 0,
    },

    {
      name: "Regular",
      testMatch: /.*smoke.test.ts/,
      retries: 2,
      use: {},
    },

    {
      name: "setup-cleanup-demo",
      testMatch: "_4global_config.test.ts",
      dependencies: ["setup"],
    },

    {
      name: "cleanup",
      testMatch: "**/global.teardown.ts",
    },

    {
      name: "setup",
      testMatch: "**/global.setup.ts",
      teardown: "cleanup",
    },
  ],
});
