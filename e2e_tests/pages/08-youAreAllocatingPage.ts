import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

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
        await commonLocators.verifyPageHeadingsByName(this.page, `You\'re allocating`);
        await commonLocators.verifyFilledTextArea(page);
        await commonLocators.clickOnButtonByName(this.page, 'Continue');    
    }
}