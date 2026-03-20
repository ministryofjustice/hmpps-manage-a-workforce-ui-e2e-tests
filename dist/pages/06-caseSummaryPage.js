"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseSummaryPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class caseSummaryPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeCaseSummaryPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-caseSummaryPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('caseSummaryPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, 'Summary');
        await common_functions_1.commonLocators.fillTextInTextArea(this.page);
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, 'Continue');
    }
}
exports.caseSummaryPage = caseSummaryPage;
