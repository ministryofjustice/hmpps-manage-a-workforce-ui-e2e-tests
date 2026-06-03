import { describe } from "node:test";
import { getRunMode } from "@utils/testMode";
import { test } from "@fixtures/PageFixtures";
import { resetAllScenarios, setupScenario } from '@utils/setup-wiremock-scenario-state';
import { noPermissionToViewThisPage } from "root/e2e_tests/pages/error403-noPermissionToViewThisPage";

describe('Unhappy path - Scenario 7 - Error 403 upon navigating to PDU page', () => {
    test.beforeAll(async () => {
        await setupScenario('GET.user.__username__.region.__regionCode__.is-allowed', 'error-403');
    })
    test(`As a SPO when they try to navigate to the PDU page and
     they don’t have the access then they could able to see the
      ‘You do not have Permission to view this page’ message
      @smoke @regression @e2e @wfp-3271`, async ({ regionsPage, noPermissionToViewThisPage,
        page }, testInfo) => {
        const mode = getRunMode(testInfo);
        await regionsPage.completeRegionsPage(mode, page);
        await noPermissionToViewThisPage.completeNoPermissionToViewThisPage(mode, page);
    })
    test.afterAll(async () => {
        await resetAllScenarios();
    });
});
