"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const setup_wiremock_scenario_state_1 = require("../utils/setup-wiremock-scenario-state");
(0, test_1.test)('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await (0, test_1.expect)(page).toHaveTitle(/Playwright/);
});
(0, test_1.test)('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // Expects page to have a heading with the name of Installation.
    await (0, test_1.expect)(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
(0, test_1.test)('check wiremock set scenario state', async ({ page }) => {
    await (0, setup_wiremock_scenario_state_1.resetScenario)('getPotentialOffenderManagerWorkloadOverCapacity');
    const response = await page.goto('http://localhost:9090/team/TM2/offenderManager/OM2/impact/person/J678910');
    const body = await response?.text();
    (0, test_1.expect)(body).toContain('Request was not matched');
    await (0, setup_wiremock_scenario_state_1.setupScenario)('getPotentialOffenderManagerWorkloadOverCapacity');
    const secondResponse = await page.goto('http://localhost:9090/team/TM2/offenderManager/OM2/impact/person/J678910');
    const secondBody = await secondResponse?.json();
    (0, test_1.expect)(secondBody).toHaveProperty('name');
    await (0, setup_wiremock_scenario_state_1.resetScenario)('getPotentialOffenderManagerWorkloadOverCapacity');
});
