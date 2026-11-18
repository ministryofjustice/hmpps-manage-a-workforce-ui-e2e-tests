import { describe } from "node:test";
import { getRunMode } from "@utils/testMode";
import { test } from "@fixtures/PageFixtures";
import { resetAllScenarios, setupScenario } from '@utils/setup-wiremock-scenario-state';

describe('Happy Path - Scenario 5 - View only regions SPO has access to', () => {
    test.beforeAll(async () => {
        await setupScenario('GET.user.__username__.regions', 'london-only');
    })
    test(`As a SPO when they go to the select PDU page and they only see
        the REGIONS they have access to.
     @smoke @regression @e2e @wfp-3288`, async ({ regionsPage, pduPage, page }, testInfo) => {
        const mode = getRunMode(testInfo);
        await regionsPage.verifyAccessibleRegionsOnly(mode, page);
    })
    test.afterAll(async () => {
        await resetAllScenarios();
    })
});
