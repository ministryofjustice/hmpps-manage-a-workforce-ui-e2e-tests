import { test, expect } from '@playwright/test';
import { resetAllScenarios, setupScenario, resetScenario } from '../utils/setup-wiremock-scenario-state';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check wiremock set scenario state', async({ page }) => {
  await resetScenario('getPotentialOffenderManagerWorkloadOverCapacity');

  const response = await page.goto('http://localhost:9090/team/TM2/offenderManager/OM2/impact/person/J678910');
  const body = await response?.text();
  expect(body).toContain('Request was not matched');

  await setupScenario('getPotentialOffenderManagerWorkloadOverCapacity');

  const secondResponse = await page.goto('http://localhost:9090/team/TM2/offenderManager/OM2/impact/person/J678910')
  const secondBody = await secondResponse?.json();
  expect(secondBody).toHaveProperty('name');

  await resetScenario('getPotentialOffenderManagerWorkloadOverCapacity');
})
