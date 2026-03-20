"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewYourAllocationNotesPage = void 0;
const common_functions_1 = require("./common-functions");
class reviewYourAllocationNotesPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeReviewYourAllocationNotesPage(page = this.page) {
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, 'Review your allocation notes');
        await common_functions_1.commonLocators.verifyFilledTextArea(page);
        await common_functions_1.commonLocators.enterEmailAddressInCombobox(this.page); // Fills 1st email address from email.json
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, 'Continue');
    }
}
exports.reviewYourAllocationNotesPage = reviewYourAllocationNotesPage;
