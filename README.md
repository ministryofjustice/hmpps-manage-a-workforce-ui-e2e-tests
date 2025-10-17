# hmpps-manage-a-workforce-ui-e2e-tests

This repository contains automated E2E UI tests for the hmpps-manage-a-workforce-ui service. The tests are written in TypeScript and use the Playwright testing library.

## Getting Started:

### Prerequisites:

    Node.js
    npm
    playwright with ts - npm init playwright@latest

### Installation:

    git clone - Clone the repository
                Navigate to the project directory
    cd  hmpps-manage-a-workforce-ui-e2e-tests

### Install the dependencies:

    npm ci
    create env-config.json file under the e2e/env-config folder and add below code.
    {
        "local": {
        "baseURL": "http://localhost:3007"
        }
    }

### Project Folder Structure:
    hmpps-manage-a-workforce-ui-e2e-tests > e2e_tests
    > env-config - Contains specific environment details(WireMock stub details). 
    > fixtures - Contains setup hooks and shared context (e.g. login states, mock servers) used across tests.
    > pages - Implements the Page Object Model, encapsulating UI selectors and actions for maintainable test abstraction.
    > test-data - Stores test data inputs, payloads, and reusable datasets for parameterized scenarios.
    > tests - The core test suite with actual test cases(spec.ts files) validating UI, API, and end-to-end flows.
    > utils - Hosts helper functions, custom assertions, and reusable logic to keep tests clean and DRY.
    > common-functions - Holds the common functions which can be reused across the suite.  

### Running the Tests:

- run 'docker compose up' from the root of this project to instatiate an instance of redis and the wiremock containers
- 'in the manage-a-workforce-ui' project, run 'npm run start-external-test:dev' to run the project under test

  All the below scpritps are in package.json

  To run the tests, use the following command:
  This test repo supports multiple browsers for running the tests - in case if you would like to run in 'firefox' or 'webkit' please replcae 'chrome' in the below commands.

  npm run build                     - To build the project(tsconfig.json) - This will compile your .ts files
                                      into the dist folder as specified in your tsconfig.json.

  npm run test:smoke:chrome         - Run a Specific Test Case by Tag Name in headless mode - this is to run the smoke test.

  npm run test:chrome               - Runs tests only in Chromium headless and Cleans old reports
                                      Generates fresh Allure results

  npm run test:chrome:headed        - Runs tests only in Chromium headed mode and Cleans old reports
                                      Generates fresh Allure results

  npm run update:chrome:screenshots - After running the above command(npm run test:chrome) it runs in headless mode and captures the
                                      screenshot of the page into the default folder and then if you run this, it runs only the Chromium tests, Update only the Chromium-specific snapshots (e.g. xxPage-chromium-darwin.png).
                                      

  npx playwright test                           - To update snapshots for just one test file.
  tests/happy-journeys/scenario1-xx.spec.ts 
  --project=chromium --update-snapshots

                                                 
  npm run test --headed             - To run the tests on all browsers in headed mode

  npm run report                    - To view the HTML report

  npm run allure:serve              - To view the allure report

  npm run codegen                   - It launches a browser window and starts recording your actions—clicks,
                                      typing, navigation, etc.—and generates the equivalent Playwright test code in real time.

  npm run lint                      - Before committing to catch issues.

  npm run lint:fix                  - During development to tidy up your codebase - Automatically corrects
                                      fixable issues (e.g., spacing, semicolons, unused imports).  

  npx playwright 
  test tests/eg.spec.ts             - Run a Specific Test File, Replace tests/eg.spec.ts with the path to
                                      your actual test file.

  npm run test:ui                   - UI Mode lets you explore, run, and debug tests with a time 
                                      travel experience complete with a watch mode.

  npm run test:debug                - This command opens a browser window as well as the Playwright Inspector. 
                                      You can use the step over button at the top of the inspector to step through your test.                           

### allure-results:

This project captures allure report after the execution.(To view: npm run allure:serve)

### tags:

Used tags (regression, smoke, e2e, and JIRA ticket reference) -  to organize, filter, and selectively run tests by feature, priority, or environment for scalable automation.