import { describe } from "node:test";
import { getRunMode } from "@utils/testMode";
import { test } from "@fixtures/PageFixtures";
import { resetAllScenarios, setupScenario } from '@utils/setup-wiremock-scenario-state';

describe('Happy Path - Scenario 8', () => {
    test(`As a SPO able to see and allocate the LAO cases if you’re on the Restricted list`, async({regionsPage,pduPage,
            selectYourTeamsPage, yourTeamsPage,
            unallocatedCasesPage, caseSummaryPage,
            allocateToAProbationPractitionerPage,
            youAreAllocatingPage,reviewYourAllocationNotesPage,
            allocateTheCasePage, caseAllocatedPage, page}, testInfo) => {
            const mode = getRunMode(testInfo);

});
});