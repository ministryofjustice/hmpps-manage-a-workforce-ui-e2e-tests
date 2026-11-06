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

- run `docker compose up` from the root of this project to instantiate an instance of Redis and the wiremock containers
- in the `manage-a-workforce-ui` project, run `npm run start-external-test:dev` to run the project under test
- Found that it works best when in the `manage-a-workforce-ui` project you only have `redis` up on docker, 
and on here you only have `wiremockk` on `9090:8080` up. Otherwise, it gets confused with the duplicated ports.

For updating the tests once changes have been made on the front end, run the following commands:

  `npm run test:chrome`               - To run the tests in headless mode (which checks the screenshots)
  
  `npm run update:chrome:screenshots` - To update the screenshots once UI changes have been made
  
All the below scripts are in package.json

This test repo supports multiple browsers for running the tests - in case if you would like to run in 'firefox' or 'webkit' please replace 'chrome' in the below commands.

To run the tests, use the following commands:

  `npm run build`                     - To build the project(tsconfig.json) - This will compile your .ts files
                                      into the dist folder as specified in your tsconfig.json.

  `npm run test:smoke:chrome`         - Run a Specific Test Case by Tag Name in headless mode - this is to run the smoke test.

  `npm run test:chrome`               - Runs tests only in Chromium headless and Cleans old reports
                                      Generates fresh Allure results

  `npm run test:chrome:headed`        - Runs tests only in Chromium headed mode and Cleans old reports
                                      Generates fresh Allure results

  `npm run update:chrome:screenshots` - After running the above command(npm run test:chrome) it runs in headless mode
                                      and captures the screenshot of the page into the default folder and then if you run
                                      this, it runs only the Chromium tests, Update only the Chromium-specific snapshots
                                      (e.g. xxPage-chromium-darwin.png).
                                      

  `npx playwright test tests/happy-journeys/scenario1-xx.spec.ts --project=chromium --update-snapshots`  
                                      - To update snapshots for just one test file.

                                                 
  `npm run test --headed`             - To run the tests on all browsers in headed mode

  `npm run report`                    - To view the HTML report

  `npm run allure:serve`              - To view the allure report

  `npm run codegen`                   - It launches a browser window and starts recording your actions—clicks,
                                      typing, navigation, etc.—and generates the equivalent Playwright test code in real time.

  `npm run lint`                      - Before committing to catch issues.

  `npm run lint:fix`                  - During development to tidy up your codebase - Automatically corrects
                                      fixable issues (e.g., spacing, semicolons, unused imports).  

  `npx playwright test tests/eg.spec.ts`             
                                      - Run a Specific Test File, Replace tests/example.spec.ts with the path to
                                      your actual test file.

  `npm run test:ui`                   - UI Mode lets you explore, run, and debug tests with a time 
                                      travel experience complete with a watch mode.

  `npm run test:debug`                - This command opens a browser window as well as the Playwright Inspector. 
                                      You can use the step over button at the top of the inspector to step through your test.                           

### allure-results:

This project captures allure report after the execution. (To view: `npm run allure:serve`)

### tags:

Used tags (regression, smoke, e2e, and JIRA ticket reference) -  to organise, filter, and selectively run tests by feature, priority, or environment for scalable automation.