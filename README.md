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
    create .env file under the main project folder - hmpps-manage-a-workforce-ui-e2e-tests

### Running the Tests:

    All the below scpritps are in package.json

    To run the tests, use the following command: 
    This test repo supports multiple browsers for running the tests - in case if you would like to run in 'firefox' or 'webkit' please replcae 'chrome' in the below commands.

    npm run build                               - To build the project(tsconfig.json) - This will compile your .ts files
                                                  into the dist folder as specified in your tsconfig.json. 

    npm run test:chrome                         - Runs tests only in Chromium headless and Cleans old reports
                                                  Generates fresh Allure results 
 
    npm run test:chrome:headed                  - Runs tests only in Chromium headed mode and Cleans old reports 
                                                  Generates fresh Allure results

    npm run test --headed                       - To run the tests on all browsers in headed mode

    npm run report                              - To view the HTML report

    npm run allure:serve                        - To view the allure report

    npm run codegen                             - It launches a browser window and starts recording your actions—clicks,
                                                  typing, navigation, etc.—and generates the equivalent Playwright test code in real time.    

    npm run lint                                - Before committing to catch issues. 

    npm run lint:fix                            - During development to tidy up your codebase - Automatically corrects fixable 
                                                  issues (e.g., spacing, semicolons, unused imports).

    npx playwright test tests/eg.spec.ts        - Run a Specific Test File, Replace tests/eg.spec.ts with the path to your 
                                                  actual test file.

    npm run test:smoke:chrome                   - Run a Specific Test Case by Name - this is to run the smoke test.