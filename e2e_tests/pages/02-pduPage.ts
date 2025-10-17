import { Page, expect } from "@playwright/test";

import { commonLocators } from "./common-functions";

export class pduPage {
    constructor(public page: Page) { }

    async completePduPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-pduPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('pduPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your probation");
        await commonLocators.selectRadioButtonByName(this.page, "Cardiff and Vale");
        await commonLocators.clickOnButtonByName(this.page, "Continue");
    }
}