import { describe } from 'node:test';
import { getRunMode } from '@utils/testMode';
import { test } from '@fixtures/PageFixtures';

describe('Happy path - Scenario 1 - Successful allocation with email notification', () => {
  test(`As a SPO allocate a case to the practitioner for 'Wales' region, 
       'Cardiff & Vale' PDU and for the 'Vale - Team' and notify other 
        practitioners by emails.  @smoke @regression @e2e @wfp-3266`, async ({ regionsPage, pduPage, selectYourTeamsPage, page }, testInfo) => {
    const mode = getRunMode(testInfo);
    await regionsPage.completeRegionsPage(mode, page);
    await pduPage.completePduPage(mode, page);
    await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
  });
});