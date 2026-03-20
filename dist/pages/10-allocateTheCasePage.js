"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allocateTheCasePage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class allocateTheCasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeAllocateTheCasePage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-allocateTheCasePage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('allocateTheCasePage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, 'Save your notes as an');
        await common_functions_1.commonLocators.verifyPageByText(this.page, 'Your allocation notes will be');
        await common_functions_1.commonLocators.verifyButtonIsVisibleByName(this.page, 'Edit my notes before');
        await common_functions_1.commonLocators.verifyButtonIsVisibleByName(this.page, 'Save my notes without editing');
        await common_functions_1.commonLocators.verifyLinkIsVisibleByName(this.page, 'Go back to review allocation');
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, 'Save my notes without editing');
    }
}
exports.allocateTheCasePage = allocateTheCasePage;
