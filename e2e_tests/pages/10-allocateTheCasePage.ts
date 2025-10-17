import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class allocateTheCasePage {
    constructor(private page: Page) { }

    async completeAllocateTheCasePage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
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
        await commonLocators.verifyButtonIsVisibleByName(this.page, 'Edit my notes before');
        await commonLocators.verifyButtonIsVisibleByName(this.page, 'Save my notes without editing');
        await commonLocators.verifyLinkIsVisibleByName(this.page, 'Go back to review allocation');
        await commonLocators.clickOnButtonByName(this.page, 'Save my notes without editing');        
    }
}