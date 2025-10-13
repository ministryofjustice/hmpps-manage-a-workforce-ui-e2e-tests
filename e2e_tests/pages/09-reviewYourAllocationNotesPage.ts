import { Page, expect } from '@playwright/test';

import { commonLocators } from "./commonLocators";

export class reviewYourAllocationNotesPage {
    constructor(private page: Page) { }

    async completeReviewYourAllocationNotesPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-reviewYourAllocationNotesPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('ReviewYourAllocationNotesPage - Skipping screenshot assertion in headed mode');
        }
        await expect(page.getByRole('heading', { name: 'Review your allocation notes' })).toBeVisible();
        await commonLocators.verifyFilledTextArea(this.page);
        await commonLocators.enterEmailAddressInCombobox(this.page); // Fills 1st email address from email.json
        await commonLocators.clickOnButtonByName(this.page, 'Continue');
        await page.waitForTimeout(3000);
    }
}