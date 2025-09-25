import { BrowserContext, Page, test as baseTest } from '@playwright/test';

import { yourTeamsPage } from '../pages/yourTeamsPage';

type PageFixtures = {
  context: BrowserContext;
  page: Page;
  baseURL: string;
  yourTeamsPage: yourTeamsPage;
};

export const test = baseTest.extend<PageFixtures>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  baseURL: async ({}, use) => {
    await use('http://localhost:3007'); // Centralized base URL
  },

  page: async ({ context, baseURL }, use) => {
    const page = await context.newPage();
    await page.goto(`${baseURL}/pdu/PDU1/teams`); // Replace with actual base URL
    await use(page);
    await page.close();
  },

  yourTeamsPage: async ({ page }, use) => {
    await use(new yourTeamsPage(page));
  },
});