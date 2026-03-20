"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pduPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class pduPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completePduPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-pduPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('pduPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, "Select your probation");
        await common_functions_1.commonLocators.selectRadioButtonByName(this.page, "Cardiff and Vale");
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, "Continue");
    }
}
exports.pduPage = pduPage;
