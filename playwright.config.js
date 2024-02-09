// @ts-check
const { defineConfig, devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout:60 * 1000,
  expect:{
    timeout:5000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
   retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
      headless:false,
      trace:'on',
      video:'on',
      screenshot:'only-on-failure'
     },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      headless:false,
      trace:'on-first-retry',
      video:'retain-on-failure',
      screenshot:'only-on-failure'
     },
    },

    {
      name:'safari',
      use:{...devices['Desktop Safari'],
      headless:false,
      trace:'on-first-retry',
      video:'retain-on-failure',
      screenshot:'only-on-failure'
    }
    },

    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },

    /* Test against mobile viewports. */
    // Since our application is not mobile friendly , we need update our TC's specifically for  mobile devices to test on them.
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5']},
    },

    {
    name:'iphone_12',  
    use: { ...devices['iPhone 12 Pro'], 
     },
   },
    /* Test against branded browsers. */
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },


});

