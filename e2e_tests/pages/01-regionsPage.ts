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

    async verifyAccessibleRegionsOnly(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-regionsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('regionsPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your region");
        await commonLocators.verifyRadioButtonByNameIsDisabled(this.page, "Greater Manchester");
        await commonLocators.verifyRadioButtonByNameIsEnabled(this.page, "London");
        await commonLocators.verifyRadioButtonByNameIsDisabled(this.page, "North East Region");
        await commonLocators.verifyRadioButtonByNameIsDisabled(this.page, "North East Region");
        await commonLocators.verifyRadioButtonByNameIsDisabled(this.page, "Wales");
    }
}
