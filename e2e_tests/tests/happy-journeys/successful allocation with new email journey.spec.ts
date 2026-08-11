import { describe } from "node:test";
import { getRunMode } from "@utils/testMode";
import { test } from "@fixtures/PageFixtures";
import { resetAllScenarios, setupScenario } from '@utils/setup-wiremock-scenario-state';

describe('Happy Path - Case allocation with new Email functionality', () => {
    test.beforeAll(async () => {
        await setupScenario('internal.v1.evaluation.snapshot.namespace.__namespace__', 'email-recipient-list');
    })
    test(`As a SPO able to see and allocate the case with new email functionality.
        @smoke @regression @e2e`, async ({ regionsPage, pduPage,
        selectYourTeamsPage, yourTeamsPage,
        unallocatedCasesPage, caseSummaryPage,
        allocateToAProbationPractitionerPage,
        youAreAllocatingPage, reviewYourAllocationNotesPage,
        emailRecepientsPage, caseAllocatedPage, page }, testInfo) => {

        const mode = getRunMode(testInfo);
        await regionsPage.completeRegionsPage(mode, page);
        await pduPage.completePduPage(mode, page);
        await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
        await yourTeamsPage.completeYourTeamsPage(mode, page);
        await unallocatedCasesPage.completeUnallocatedCasesPage(mode, page)
        await caseSummaryPage.completeCaseSummaryPage(mode, page);
        await allocateToAProbationPractitionerPage.completeAllocateToAProbationPractitionerPage(mode, page);
        await youAreAllocatingPage.completeYouAreAllocatingPage(mode, page);
        await reviewYourAllocationNotesPage.completeReviewYourAllocationNotesPage(page)
        await emailRecepientsPage.completeEmailRecepientsPage(page);
        await caseAllocatedPage.completeCaseAllocatedPage(page);
    });
    test.afterAll(async () => {
        await resetAllScenarios();
    });
});
