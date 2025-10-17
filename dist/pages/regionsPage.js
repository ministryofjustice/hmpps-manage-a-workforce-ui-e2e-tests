"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionsPage = void 0;
const test_1 = require("@playwright/test");
const commonLocators_1 = require("./commonLocators");
class regionsPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeRegionsPage(mode, page = this.page) {
        if (mode === 'headed') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-regionsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('Skipping screenshot assertion in headless mode');
        }
        await commonLocators_1.commonLocators.verifyPageHeadingsByName(this.page, "Select your region");
        await commonLocators_1.commonLocators.selectRadioButtonByName(this.page, "A Region");
        await commonLocators_1.commonLocators.clickOnButtonByName(this.page, "Continue");
        await page.waitForTimeout(5000);
    }
}
exports.regionsPage = regionsPage;
