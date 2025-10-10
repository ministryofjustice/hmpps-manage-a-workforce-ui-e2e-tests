import { Page, expect } from '@playwright/test';

import { commonLocators } from "./commonLocators";

export class allocateTheCasePage {
    constructor(private page: Page) { }

    async completeAllocateToTheCasePage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-allocateTheCasePage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('allocateTheCasePage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, 'Save your notes as an');
        await commonLocators.verifyPageByText(this.page, 'Your allocation notes will be');
        await expect(page.getByRole('button', { name: 'Edit my notes before' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Save my notes without editing' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Go back to review allocation' })).toBeVisible();
       // await commonLocators.clickOnButtonByName(this.page, 'Save my notes without editing');
        await page.waitForTimeout(3000);
    }
}