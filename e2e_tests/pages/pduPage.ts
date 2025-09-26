import { Page } from "@playwright/test";
import { commonLocators } from "./commonLocators";

export class pduPage {
    constructor(public page: Page) { }

    async completePduPage(page: Page = this.page) {
        await commonLocators.verifyPageHeadingsByName(this.page, "Select your probation");
        await commonLocators.clickOnRadioButtonByName(this.page, "A Probation Delivery Unit");
        await commonLocators.clickOnButtonByName(this.page, "Continue");
        await page.waitForTimeout(5000);
    }
}
