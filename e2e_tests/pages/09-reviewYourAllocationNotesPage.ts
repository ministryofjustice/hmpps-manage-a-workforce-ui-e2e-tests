import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class reviewYourAllocationNotesPage {
    constructor(private page: Page) { }

    async completeReviewYourAllocationNotesPage(mode: 'headless' | 'headed', page: Page = this.page,
         tagName?: string) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-reviewYourAllocationNotesPage.png', {
                fullPage: true
            });
        } else {
            console.log('reviewYourAllocationNotesPage - Skipping screenshot assertion in headed mode');
        }

        if (tagName) {
            await commonLocators.verifyTagOnThePage(page, tagName);
        }

        await commonLocators.verifyPageHeadingsByName(page, 'Review your allocation notes');
        await commonLocators.verifyFilledTextArea(page);
        await commonLocators.verifyLinkIsVisibleByName(page, 'Back to select practitioner');
        await commonLocators.clickOnButtonByName(page, 'Continue');
    }

    async completeReviewYourAllocationNotesWithSensitiveInformationPage(mode: 'headless' | 'headed',
         page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-reviewYourAllocationNotesWithSensitiveInformationPage.png', {
                fullPage: true
            });
        } else {
            console.log('reviewYourAllocationNotesWithSensitiveInformationPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(page, 'Review your allocation notes');
        await commonLocators.verifyFilledTextArea(page);
        await commonLocators.fillTextInTextArea(page, 'EDITED-SENSITIVE-INFO');
        await commonLocators.verifyFilledTextArea(page, 'EDITED-SENSITIVE-INFO');
        await commonLocators.selectCheckBoxByName(page, 'Yes, it contains sensitive information');
        await commonLocators.verifyLinkIsVisibleByName(page, 'Back to select practitioner');
        await commonLocators.clickOnButtonByName(page, 'Continue');
    }
}
