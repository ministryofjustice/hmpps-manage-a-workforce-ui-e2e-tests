"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pduPage = void 0;
const test_1 = require("@playwright/test");
const commonLocators_1 = require("./commonLocators");
class pduPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completePduPage(mode, page = this.page) {
        if (mode === 'headed') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-pduPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('Skipping screenshot assertion in headless mode');
        }
        await commonLocators_1.commonLocators.verifyPageHeadingsByName(this.page, "Select your probation");
        await commonLocators_1.commonLocators.selectRadioButtonByName(this.page, "A Probation Delivery Unit");
        await commonLocators_1.commonLocators.clickOnButtonByName(this.page, "Continue");
        await page.waitForTimeout(5000);
    }
}
exports.pduPage = pduPage;
