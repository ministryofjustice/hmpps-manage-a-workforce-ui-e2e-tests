import { Locator, Page, expect } from '@playwright/test';

import { commonLocators } from "./commonLocators";

export class youAreAllocatingPage {
    constructor(private page: Page) { }

    async completeYouAreAllocatingPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-youAreAllocatingPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('YouAreAllocatingPage - Skipping screenshot assertion in headed mode');
        }
        await expect(page.getByRole('heading', { name: 'You\'re allocating' })).toBeVisible();
        await commonLocators.verifyFilledTextArea(this.page);
        await commonLocators.clickOnButtonByName(this.page, 'Continue');
        await page.waitForTimeout(5000);
    }
}