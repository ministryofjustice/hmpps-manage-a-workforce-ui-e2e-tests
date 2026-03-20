"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionsPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class regionsPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeRegionsPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-regionsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('regionsPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, "Select your region");
        await common_functions_1.commonLocators.selectRadioButtonByName(this.page, "Wales");
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, "Continue");
    }
}
exports.regionsPage = regionsPage;
