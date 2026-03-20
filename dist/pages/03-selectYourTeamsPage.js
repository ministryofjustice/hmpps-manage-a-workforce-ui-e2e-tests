"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectYourTeamsPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class selectYourTeamsPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeSelectYourTeamsPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-selectYourTeamsPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('selectYourTeamsPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, "Select your teams");
        await common_functions_1.commonLocators.selectCheckBoxByName(this.page, "NPS - Wrexham - Team 1");
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, "Continue");
    }
}
exports.selectYourTeamsPage = selectYourTeamsPage;
