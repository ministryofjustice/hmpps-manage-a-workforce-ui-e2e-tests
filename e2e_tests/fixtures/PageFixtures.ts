import { BrowserContext, Page, test as baseTest } from '@playwright/test';

import { allocateTheCasePage } from '@pages/10-allocateTheCasePage';
import { allocateToAProbationPractitionerPage } from '@pages/07-allocateToAProbationPractitionerPage';
import { caseAllocatedPage } from '@pages/11-caseAllocatedPage';
import { caseSummaryPage } from '@pages/06-caseSummaryPage';
import envConfig from '@env-config/envConfig.json';
import { pduPage } from '@pages/02-pduPage';
import { regionsPage } from '@pages/01-regionsPage';
import { reviewYourAllocationNotesPage } from '@pages/09-reviewYourAllocationNotesPage';
import { selectYourTeamsPage } from '@pages/03-selectYourTeamsPage';
import { unallocatedCasesPage } from '@pages/05-unallocatedCasesPage';
import { youAreAllocatingPage } from '@pages/08-youAreAllocatingPage';
import { yourTeamsPage } from '@pages/04-yourTeamsPage';

type PageFixtures = {
  context: BrowserContext;
  page: Page;
  baseURL: string;
  regionsPage: regionsPage;
  pduPage: pduPage;
  selectYourTeamsPage: selectYourTeamsPage;
  unallocatedCasesPage: unallocatedCasesPage;
  caseSummaryPage: caseSummaryPage;
  yourTeamsPage: yourTeamsPage;
  allocateToAProbationPractitionerPage: allocateToAProbationPractitionerPage;
  youAreAllocatingPage: youAreAllocatingPage;
  reviewYourAllocationNotesPage: reviewYourAllocationNotesPage;
  allocateTheCasePage: allocateTheCasePage;
  caseAllocatedPage: caseAllocatedPage;
};

export const test = baseTest.extend<PageFixtures>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }, // Chromium only
      deviceScaleFactor: 1,
    });
    await use(context);
    await context.close();
  },

  baseURL: async ({ }, use) => {
    const env = process.env.TEST_ENV || 'local';
    const url = (envConfig as Record<string, { baseURL: string }>)[env].baseURL;
    console.log(`Running tests against environment: ${env} - ${url}`);
    await use(url);
  },

  page: async ({ context, baseURL }, use) => {
    const page = await context.newPage();
    await page.goto(`${baseURL}/regions`);
    await use(page);
    await page.close();
  },

  regionsPage: async ({ page }, use) => {
    await use(new regionsPage(page));
  },

  pduPage: async ({ page }, use) => {
    await use(new pduPage(page));
  },

  selectYourTeamsPage: async ({ page }, use) => {
    await use(new selectYourTeamsPage(page));
  },

  yourTeamsPage: async ({ page }, use) => {
    await use(new yourTeamsPage(page));
  },

  unallocatedCasesPage: async ({ page }, use) => {
    await use(new unallocatedCasesPage(page));
  },

  caseSummaryPage: async ({ page }, use) => {
    await use(new caseSummaryPage(page));
  },

  allocateToAProbationPractitionerPage: async ({ page }, use) => {
    await use(new allocateToAProbationPractitionerPage(page));
  },

  youAreAllocatingPage: async ({ page }, use) => {
    await use(new youAreAllocatingPage(page));
  },

  reviewYourAllocationNotesPage: async ({ page }, use) => {
    await use(new reviewYourAllocationNotesPage(page));
  },

  allocateTheCasePage: async ({ page }, use) => {
    await use(new allocateTheCasePage(page));
  },

  caseAllocatedPage: async ({ page }, use) => {
    await use(new caseAllocatedPage(page));
  }
});