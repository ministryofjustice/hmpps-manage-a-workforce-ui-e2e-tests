import { describe } from 'node:test';
import { test } from '@fixtures/PageFixtures';

describe('Happy path - Scenario 1 - Successful allocation with email notification', () => {
  test(`As a SPO allocate a case to the practitioner for 'Wales' region, 
     + 'Cardiff & Vale' PDU and for the 'Vale - Team' and notify other 
     + practitioners by emails.  @smoke`, async ({ regionsPage, pduPage, selectYourTeamsPage, page }) => {
    await regionsPage.completeRegionsPage(page);
    await pduPage.completePduPage(page);
    await selectYourTeamsPage.completeSelectYourTeamsPage(page);
  });
});