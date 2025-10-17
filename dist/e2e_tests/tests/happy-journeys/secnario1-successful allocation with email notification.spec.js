"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const PageFixtures_1 = require("../../fixtures/PageFixtures");
(0, node_test_1.describe)('Happy path - Scenario 1 - Successful allocation with email notification', () => {
    (0, PageFixtures_1.test)(`As a SPO allocate a case to the practitioner for 'Wales' region, 
     + 'Cardiff & Vale' PDU and for the 'Vale - Team' and notify other 
     + practitioners by emails.  @smoke`, async ({ yourTeamsPage, page }) => {
        //await expect(yourTeamsPage.heading()).toHaveText(testData.expectedHeading);
        //yourTeamsPage.verifyHeading();
        //yourTeamsPage.clickViewUnallocatedCasesButton();
        //await verifyNoErrorHeading(page);
    });
});
