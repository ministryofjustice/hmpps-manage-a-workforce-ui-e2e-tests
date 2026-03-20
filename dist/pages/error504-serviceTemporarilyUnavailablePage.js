"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceTemporarilyUnavailablePage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class serviceTemporarilyUnavailablePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeServiceTemporarilyUnavailablePage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-serviceTemporarilyUnavailablePage.png', {
                fullPage: true,
                threshold: 0.2
            });
        }
        else {
            console.log('serviceTemporarilyUnavailablePage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, 'This service is temporarily unavailable');
        await (0, common_functions_1.verifyPageByText)(this.page, `Another service that Allocate a Person on Probation relies upon is taking too long to respond.
                Try reloading the page. You can do this by pressing F5 (on a PC), or Cmd + R (on a Mac).
                If the page still does not load, please try again later.`);
    }
}
exports.serviceTemporarilyUnavailablePage = serviceTemporarilyUnavailablePage;
