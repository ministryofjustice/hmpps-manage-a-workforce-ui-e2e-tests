import { Page, expect } from "@playwright/test";

import { commonLocators } from "./commonLocators";

export class regionsPage {
    constructor(public page: Page) { }

    async completeRegionsPage(page: Page = this.page) {
        await expect(page).toHaveScreenshot('actual_regionsPage.png', {
            fullPage: true,
            threshold: 0.2,
        });
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your region");
        await commonLocators.clickOnRadioButtonByName(this.page, "A Region");
        await commonLocators.clickOnButtonByName(this.page, "Continue");
        await page.waitForTimeout(5000);
    }
}