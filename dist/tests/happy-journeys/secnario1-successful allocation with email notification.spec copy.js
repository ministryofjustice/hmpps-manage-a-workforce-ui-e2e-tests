"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const testMode_1 = require("@utils/testMode");
const PageFixtures_1 = require("@fixtures/PageFixtures");
(0, node_test_1.describe)('Happy path - Scenario 1 - Successful allocation with email notification', () => {
    (0, PageFixtures_1.test)(`As a SPO allocate a case to the practitioner for 'Wales' region, 
       'Cardiff & Vale' PDU and for the 'NPS - Wrexham - Team 1' and notify other 
        practitioners by emails.  @smoke @regression @e2e @wfp-3266`, async ({ regionsPage, pduPage, selectYourTeamsPage, yourTeamsPage, unallocatedCasesPage, caseSummaryPage, allocateToAProbationPractitionerPage, youAreAllocatingPage, reviewYourAllocationNotesPage, allocateTheCasePage, caseAllocatedPage, page }, testInfo) => {
        const mode = (0, testMode_1.getRunMode)(testInfo);
        await regionsPage.completeRegionsPage(mode, page);
        await pduPage.completePduPage(mode, page);
        await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
        await yourTeamsPage.completeYourTeamsPage(mode, page);
        await unallocatedCasesPage.completeUnallocatedCasesPage(mode, page);
        await caseSummaryPage.completeCaseSummaryPage(mode, page);
        await allocateToAProbationPractitionerPage.completeAllocateToAProbationPractitionerPage(mode, page);
        await youAreAllocatingPage.completeYouAreAllocatingPage(mode, page);
        await reviewYourAllocationNotesPage.completeReviewYourAllocationNotesPage(page);
        await allocateTheCasePage.completeAllocateTheCasePage(mode, page);
        await caseAllocatedPage.completeCaseAllocatedPage(page);
    });
});
