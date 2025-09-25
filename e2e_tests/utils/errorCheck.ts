import { Page, expect } from '@playwright/test';

export async function verifyNoErrorHeading(page: Page) {
  await expect(page.getByRole('heading')).not.toHaveText('Page not found');
}