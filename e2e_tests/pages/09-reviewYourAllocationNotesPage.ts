import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class reviewYourAllocationNotesPage {
    constructor(private page: Page) { }

    async completeReviewYourAllocationNotesPage(page: Page = this.page) {
        await commonLocators.verifyPageHeadingsByName(this.page, 'Review your allocation notes');
        await commonLocators.verifyFilledTextArea(page);
        await commonLocators.enterEmailAddressInCombobox(this.page); // Fills 1st email address from email.json
        await commonLocators.clickOnButtonByName(this.page, 'Continue');    
    }
}