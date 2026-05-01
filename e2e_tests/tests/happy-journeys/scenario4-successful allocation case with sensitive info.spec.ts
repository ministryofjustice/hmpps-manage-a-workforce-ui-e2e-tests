import { describe } from 'node:test';
import { getRunMode } from '@utils/testMode';
import { test } from '@fixtures/PageFixtures';

describe('Happy path - Scenario 4 -  Successful allocation after editing notes with sensitive info', () => {
    test(`As SPO allocate a case to practitioner & edit notes for
         the (SPO Oversight Contact) with sensitive information before they are sent.
        @smoke @regression @e2e @wfp-3282`, async({regionsPage,pduPage,
            selectYourTeamsPage, yourTeamsPage,
            unallocatedCasesPage, caseSummaryPage,
            allocateToAProbationPractitionerPage,
            youAreAllocatingPage,reviewYourAllocationNotesPage,
            allocateTheCasePage, caseAllocatedPage, page}, testInfo) => {
            const mode = getRunMode(testInfo);
            await regionsPage.completeRegionsPage(mode, page);
            await pduPage.completePduPage(mode, page);
            await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
            await yourTeamsPage.completeYourTeamsPage(mode, page);
            await unallocatedCasesPage.completeUnallocatedCasesPage(mode, page);
            await caseSummaryPage.completeCaseSummaryPage(mode, page);
            await allocateToAProbationPractitionerPage.completeAllocateToAProbationPractitionerPage(mode, page);
            await youAreAllocatingPage.completeYouAreAllocatingPage(mode, page);  
            await reviewYourAllocationNotesPage.completeReviewYourAllocationNotesPage(page);
            await allocateTheCasePage.editNotesAndCompleteAllocateTheCaseWithSensitiveInfoPage(mode, page);
            await caseAllocatedPage.completeCaseAllocatedPage(page);
        })
});
