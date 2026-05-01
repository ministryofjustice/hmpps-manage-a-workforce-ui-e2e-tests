import { describe } from 'node:test'
import { getRunMode } from '@utils/testMode'
import { test } from '@fixtures/PageFixtures'

describe('Happy Path - Scenario 5 - Successful allocation after editing notes and downloading documents', () => {
    test(`As a SPO navigate to different tabs(
    RISK, Document, Summary, and PR) and add a note on each tab and try
     to open up a document attached, continue to allocate a case.
     @smoke @regression @e2e @wfp-3288`, async( {regionsPage,pduPage,
            selectYourTeamsPage, yourTeamsPage,
            unallocatedCasesPage, caseSummaryPage,
            // allocateToAProbationPractitionerPage,
            // youAreAllocatingPage,reviewYourAllocationNotesPage,
            // allocateTheCasePage, caseAllocatedPage,
            page}, testInfo) => {
            const mode = getRunMode(testInfo);
            await regionsPage.completeRegionsPage(mode, page);
            await pduPage.completePduPage(mode, page);
            await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
            await yourTeamsPage.completeYourTeamsPage(mode, page);
            await unallocatedCasesPage.completeUnallocatedCasesPage(mode, page);
            await caseSummaryPage.editTabsOnSummaryPageAndDownloadAttachment(mode, page);

            });
    });