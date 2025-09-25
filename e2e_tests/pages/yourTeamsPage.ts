import { Page } from '@playwright/test';

export class yourTeamsPage {
  constructor(public page: Page) {}

  heading() {
    return this.page.getByRole('heading');
  }

  async clickViewUnallocatedCasesButton() {
    await this.page.getByRole('button', { name: 'View unallocated cases' }).click();
  }
}