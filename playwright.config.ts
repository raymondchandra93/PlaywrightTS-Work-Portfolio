import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* This will be where you will save your test files */
  testDir: './tests',

  /* Timeout that is applicable in each step. By default = 30 seconds  */
  timeout: 40 * 1000,

  expect: {
    
    /* Timeout for assertion, separate from test timeout. By default = 5 secs  */
    timeout: 40 * 1000,
  },
  
  /* Run tests in files in parallel */
  //fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Browser that we are using */
    browserName: "chromium",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Headless or not */
    headless: false,
  },
});
