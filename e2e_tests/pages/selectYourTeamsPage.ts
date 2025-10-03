import { Page, expect } from "@playwright/test";

import { commonLocators } from "./commonLocators";

export class selectYourTeamsPage {
    constructor(public page: Page) { }

    async completeSelectYourTeamsPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-selectYourTeamsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your teams");
        await commonLocators.selectCheckBoxByName(this.page, "A Team");
        await commonLocators.clickOnButtonByName(this.page, "Continue");
        await page.waitForTimeout(5000);
    }
}