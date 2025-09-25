import { describe } from 'node:test';
import { expect } from '@playwright/test';
import { test } from '../../fixtures/PageFixtures';
import  testData  from '../../data/expectedHeading.json';
import { verifyNoErrorHeading } from '../../utils/errorCheck';

describe('Happy path - Scenario 1 - Successful allocation with email notification', () => {
   test(`As a SPO allocate a case to the practitioner for 'Wales' region, 
     + 'Cardiff & Vale' PDU and for the 'Vale - Team' and notify other 
     + practitioners by emails.  @smoke`, async ({yourTeamsPage ,page }) => {
    await expect(yourTeamsPage.heading()).toHaveText(testData.expectedHeading);
    yourTeamsPage.clickViewUnallocatedCasesButton();
    await verifyNoErrorHeading(page);
  });
});