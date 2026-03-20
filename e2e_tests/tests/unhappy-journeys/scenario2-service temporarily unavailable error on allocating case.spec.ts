import { describe } from 'node:test';
import { getRunMode } from '@utils/testMode';
import { test } from '@fixtures/PageFixtures';
import { setupScenario, resetScenario } from '@utils/setup-wiremock-scenario-state';

describe('Unhappy path - Scenario 2 - Error upon submitting the page', () => {
  test(`As SPO, go to view unallocated cases with an intention to allocate 1..n cases
      @smoke @regression @e2e @wfp-3266`, async ({ regionsPage, pduPage,
        selectYourTeamsPage, yourTeamsPage, serviceTemporarilyUnavailablePage, page}, testInfo) => {
        const mode = getRunMode(testInfo);
        await setupScenario('GET.team.__teamCode__.cases.unallocated', 'error-504');
        await regionsPage.completeRegionsPage(mode, page);
        await pduPage.completePduPage(mode, page);
        await selectYourTeamsPage.completeSelectYourTeamsPage(mode, page);
        await yourTeamsPage.completeYourTeamsPage(mode, page);
        await serviceTemporarilyUnavailablePage.completeServiceTemporarilyUnavailablePage(mode, page);
        await resetScenario('GET.team.__teamCode__.cases.unallocated');
        });
    });