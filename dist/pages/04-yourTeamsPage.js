"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yourTeamsPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class yourTeamsPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeYourTeamsPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-yourTeamsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('yourTeamsPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageByText(this.page, "Your teams");
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, "View unallocated cases");
    }
}
exports.yourTeamsPage = yourTeamsPage;
