import { Page } from "@playwright/test";
import { commonLocators } from "./commonLocators";

export class selectYourTeamsPage {
    constructor(public page: Page) { }

    async completeSelectYourTeamsPage(page: Page = this.page) {
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your teams");
        await commonLocators.clickOnCheckBoxByName(this.page, "A Team");
        await commonLocators.clickOnButtonByName(this.page, "Continue");
        await page.waitForTimeout(5000);
    }
}