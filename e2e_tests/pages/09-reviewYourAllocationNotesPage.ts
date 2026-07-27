import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class reviewYourAllocationNotesPage {
    constructor(private page: Page) { }

    async completeReviewYourAllocationNotesPage(page: Page = this.page, restricted?: string) {

        if (restricted) {
            await commonLocators.verifyRestrictedTagOnThePage(page, restricted);
        }

        await commonLocators.verifyPageHeadingsByName(page, 'Review your allocation notes');
        await commonLocators.verifyFilledTextArea(page);
        await commonLocators.verifyLinkIsVisibleByName(page, 'Back to select practitioner');
        await commonLocators.clickOnButtonByName(page, 'Continue');
    }

    async completeReviewYourAllocationNotesWithSensitiveInformationPage(page: Page = this.page) {
        await commonLocators.verifyPageHeadingsByName(page, 'Review your allocation notes');
        await commonLocators.verifyFilledTextArea(page);
        await commonLocators.fillTextInTextArea(page, 'EDITED-SENSITIVE-INFO');
        await commonLocators.verifyFilledTextArea(page, 'EDITED-SENSITIVE-INFO');
        await commonLocators.selectCheckBoxByName(page, 'Yes, it contains sensitive information');
        await commonLocators.verifyLinkIsVisibleByName(page, 'Back to select practitioner');
        await commonLocators.clickOnButtonByName(page, 'Continue');
    }
}
