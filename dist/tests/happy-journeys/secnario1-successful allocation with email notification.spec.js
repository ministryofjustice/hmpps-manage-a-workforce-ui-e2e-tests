"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const PageFixtures_1 = require("@fixtures/PageFixtures");
(0, node_test_1.describe)('Happy path - Scenario 1 - Successful allocation with email notification', () => {
    (0, PageFixtures_1.test)(`As a SPO allocate a case to the practitioner for 'Wales' region, 
       'Cardiff & Vale' PDU and for the 'Vale - Team' and notify other 
        practitioners by emails.  @smoke @regression @e2e @wfp-3266`, async ({ regionsPage, pduPage, selectYourTeamsPage, page }, testInfo) => {
        const mode = testInfo.project.use.headless ? 'headless' : 'headed';
        await regionsPage.completeRegionsPage(mode, page);
        await pduPage.completePduPage(mode, page);
        await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
    });
});
