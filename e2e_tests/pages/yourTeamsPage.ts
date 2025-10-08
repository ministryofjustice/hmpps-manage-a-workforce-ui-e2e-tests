import { Page, expect } from "@playwright/test";

import { commonLocators } from "./commonLocators";

export class yourTeamsPage {
    constructor(public page: Page) { }

    async completeyourTeamsPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-yourTeamsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Your teams");
        await commonLocators.clickOnButtonByName(this.page, "View unallocated cases");
        await page.waitForTimeout(5000);
    }
}