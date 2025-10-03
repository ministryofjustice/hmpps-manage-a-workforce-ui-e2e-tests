import { BrowserContext, Page, test as baseTest } from '@playwright/test';

import envConfig  from '@env-config/envConfig.json';
import { pduPage } from '@pages/pduPage';
import { regionsPage } from '@pages/regionsPage';
import { selectYourTeamsPage } from '@pages/selectYourTeamsPage';

type PageFixtures = {
  context: BrowserContext;
  page: Page;
  baseURL: string;
  regionsPage: regionsPage;
  pduPage: pduPage;
  selectYourTeamsPage: selectYourTeamsPage;
  
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

  baseURL: async ({}, use) => {
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
  }
});