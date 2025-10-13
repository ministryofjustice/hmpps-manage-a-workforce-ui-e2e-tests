import { Page, expect } from '@playwright/test';

import { commonLocators } from "./commonLocators";

export class caseSummaryPage {
    constructor(private page: Page) { }

    async completeCaseSummaryPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-caseSummaryPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('caseSummaryPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, 'Summary');
        await commonLocators.fillTextInTextArea(this.page);
        await commonLocators.clickOnButtonByName(this.page, 'Continue');
        await page.waitForTimeout(3000);
    }
}