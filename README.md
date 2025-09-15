# hmpps-manage-a-workforce-ui-e2e-tests
Automation e2e tests repo for APoP-manage-a-workforce UI in playwright ts

This repository contains automated E2E UI tests for the hmpps-manage-a-workforce-ui service. The tests are written in TypeScript and use the Playwright testing library.

## Getting Started:

### Prerequisites:

    Node.js
    npm

### Installation:

    git clone - Clone the repository
                Navigate to the project directory
    cd  hmpps-manage-a-workforce-ui-e2e-tests

### Install the dependencies:
    npm ci
    create .env file under the project level

### Running the Tests:

    All the below scpritps are in package.json

    To run the tests, use the following command:

    npm run build                               - To build the project(tsconfig.json) - This will compile your .ts files
                                                  into the dist folder as specified in your tsconfig.json. 

    npm run test:chrome                         -   Runs tests only in Chromium headless and Cleans old reports
                                                    Generates fresh Allure results 
                                                    
    npm run test:firfox                         -   To run the tests on firefox headless and uses the list reporter, which 
                                                    outputs test results in a clean, readable format.

    npm run test:webkit                         -   To run the tests on webkit headless and uses the list reporter, which
                                                    outputs test results in a clean, readable format. 

    npm run test:chrome:headed                  -  To run the tests on chrome in headed mode and uses the list reporter, which 
                                                   outputs test results in a clean, readable format.

    npm run test:firefox:headed                 - To run the tests on firefox in headed mode and uses the list reporter, which 
                                                  outputs test results in a clean, readable format.

    npm run test:webkit:headed"                 - To run the tests on webkit in headed mode and uses the list reporter, which 
                                                  outputs test results in a clean, readable format.

    npm run test --headed                       -   To run the tests on all browsers in headed mode

    npm run report                              -   To view the HTML report

    npm run codegen                             - It launches a browser window and starts recording your actions—clicks,
                                                  typing, navigation, etc.—and generates the equivalent Playwright test code in real time.    

    npm run lint                                - Before committing to catch issues. 

    npm run lint:fix                            - During development to tidy up your codebase - Automatically corrects fixable 
                                                  issues (e.g., spacing, semicolons, unused imports).

    npx playwright test tests/eg.spec.ts        - Run a Specific Test File, Replace tests/eg.spec.ts with the path to your 
                                                  actual test file.

    test:smoke:chrome                           - Run a Specific Test Case by Name - this is to run the smoke test.