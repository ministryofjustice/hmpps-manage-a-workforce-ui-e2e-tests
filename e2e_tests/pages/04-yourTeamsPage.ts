import { Page, expect } from "@playwright/test";

import { commonLocators } from "./common-functions";

export class yourTeamsPage {
    constructor(public page: Page) { }

    async completeYourTeamsPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-yourTeamsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('yourTeamsPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageByText(this.page, "Your teams");
        await commonLocators.clickOnButtonByName(this.page, "View unallocated cases");
    }
}