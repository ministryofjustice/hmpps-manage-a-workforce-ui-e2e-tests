"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const testMode_1 = require("@utils/testMode");
const PageFixtures_1 = require("@fixtures/PageFixtures");
const setup_wiremock_scenario_state_1 = require("@utils/setup-wiremock-scenario-state");
(0, node_test_1.describe)('Unhappy path - Scenario 2 - Error upon submitting the page', () => {
    (0, PageFixtures_1.test)(`As SPO, go to view unallocated cases with an intention to allocate 1..n cases
      @smoke @regression @e2e @wfp-3266`, async ({ regionsPage, pduPage, selectYourTeamsPage, yourTeamsPage, serviceTemporarilyUnavailablePage, page }, testInfo) => {
        const mode = (0, testMode_1.getRunMode)(testInfo);
        await (0, setup_wiremock_scenario_state_1.setupScenario)('GET.team.__teamCode__.cases.unallocated', 'error-504');
        await regionsPage.completeRegionsPage(mode, page);
        await pduPage.completePduPage(mode, page);
        await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
        await yourTeamsPage.completeYourTeamsPage(mode, page);
        await serviceTemporarilyUnavailablePage.completeServiceTemporarilyUnavailablePage(mode, page);
        await (0, setup_wiremock_scenario_state_1.resetScenario)('GET.team.__teamCode__.cases.unallocated');
    });
});
