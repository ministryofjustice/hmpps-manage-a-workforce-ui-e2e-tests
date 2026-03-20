"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youAreAllocatingPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class youAreAllocatingPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeYouAreAllocatingPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-youAreAllocatingPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('YouAreAllocatingPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, `You\'re allocating`);
        await common_functions_1.commonLocators.verifyFilledTextArea(page);
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, 'Continue');
    }
}
exports.youAreAllocatingPage = youAreAllocatingPage;
