import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sign-in-dev.hmpps.service.justice.gov.uk/auth/sign-in?redirect_uri=https://workforce-management-dev.hmpps.service.justice.gov.uk/sign-in/callback');
  await page.getByRole('textbox', { name: 'Username' }).fill('kiranvenkatanarayana');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mys0re@30');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Show   password' }).click();
  await expect(page.getByRole('button', { name: 'Hide' })).toBeVisible();

  await page.getByRole('button', { name: 'Show   password' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();

  await page.getByRole('link', { name: 'Genevieve Corkery' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Make notes for the' }).click();
  await page.getByRole('textbox', { name: 'Make notes for the' }).fill('testing');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://workforce-management-dev.hmpps.service.justice.gov.uk/pdu/WPTNWS/X957624/convictions/1/case-view');
  await expect(page.getByRole('textbox', { name: 'Make notes for the' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Make notes for the' })).toHaveValue('testing');
  await expect(page.getByRole('textbox', { name: 'Make notes for the' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('tabpanel', { name: 'All teams' })).toBeVisible();

  await page.getByRole('radio', { name: 'Select Pauline Silver to' }).check();
  await expect(page.getByRole('textbox', { name: 'Make notes for the' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Make notes for the' }).click();
  await page.getByRole('textbox', { name: 'Make notes for the' }).click();
  await expect(page.getByRole('textbox', { name: 'Make notes for the' })).toHaveValue('testing');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'You\'re allocating Genevieve' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Make notes for the' })).toHaveValue('testing');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Review your allocation notes' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'These notes will be sent in' })).toHaveValue('testing');
  await page.getByRole('combobox', { name: 'Email address' }).click();
  await page.getByRole('combobox', { name: 'Email address' }).fill('na');
  await expect(page.getByRole('option', { name: 'darshana.patabandi@justice.' })).toBeVisible();

  await page.getByRole('option', { name: 'jonathan.brighton2@justice.' }).click();
  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Edit my notes before' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save my notes without editing' })).toBeVisible();
});


// TODO: Add verification for links within each section and click them to ensure navigation works correctly.