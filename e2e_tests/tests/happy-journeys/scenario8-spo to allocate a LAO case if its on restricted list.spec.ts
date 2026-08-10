import { describe } from "node:test";
import { getRunMode } from "@utils/testMode";
import { test } from "@fixtures/PageFixtures";
import { resetAllScenarios, setupScenario } from '@utils/setup-wiremock-scenario-state';

describe('Happy Path - Scenario 8 - Successful allocation of LAO case on the Restricted list.', () => {
        test.beforeAll(async () => {
        await setupScenario('GET.team.choose-practitioner', 'Restricted');
    })
    test(`As a SPO able to see and allocate the LAO cases if you’re on the Restricted list.
        @smoke @regression @e2e @wfp-3303`, async ({ regionsPage, pduPage,
        selectYourTeamsPage, yourTeamsPage,
        unallocatedCasesPage, caseSummaryPage,
        allocateToAProbationPractitionerPage,
        youAreAllocatingPage, reviewYourAllocationNotesPage,
        allocateTheCasePage, caseAllocatedPage, page }, testInfo) => {

        const mode = getRunMode(testInfo);
        await regionsPage.completeRegionsPage(mode, page);
        await pduPage.completePduPage(mode, page);
        await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
        await yourTeamsPage.completeYourTeamsPage(mode, page);
        await unallocatedCasesPage.completeUnallocatedCasesWithResrictedCase(mode, page, 'Pearl Gorczany');
        await caseSummaryPage.completeCaseSummaryPage(mode, page, 'Restricted access');
        await allocateToAProbationPractitionerPage.completeAllocateToAProbationPractitionerPage(mode, page, 'Restricted access');
        await youAreAllocatingPage.completeYouAreAllocatingPage(mode, page, 'Restricted access');
        await reviewYourAllocationNotesPage.completeReviewYourAllocationNotesPage(page, 'Restricted access');
        await allocateTheCasePage.completeAllocateTheCasePage(mode, page, 'Restricted access');
        await caseAllocatedPage.completeCaseAllocatedPage(page, 'X961887', true);
    });
        test.afterAll(async () => {
        await resetAllScenarios();
    });
});
