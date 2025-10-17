import { Page, expect } from "@playwright/test";

import { commonLocators } from "./common-functions";

export class regionsPage {
    constructor(public page: Page) { }

    async completeRegionsPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-regionsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('regionsPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your region");
        await commonLocators.selectRadioButtonByName(this.page, "Wales");
        await commonLocators.clickOnButtonByName(this.page, "Continue");
    }
}