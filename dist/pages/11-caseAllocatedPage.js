"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseAllocatedPage = void 0;
const common_functions_1 = require("./common-functions");
class caseAllocatedPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeCaseAllocatedPage(page = this.page) {
        await common_functions_1.commonLocators.verifyPageHeadingsByName(page, 'Case allocated');
        await common_functions_1.commonLocators.verifyPageHeadingsByName(page, 'What happens next');
        await common_functions_1.commonLocators.clickOnLinkByName(page, 'Return to unallocated cases');
        await common_functions_1.commonLocators.verifyPageHeadingsByName(page, 'Unallocated cases');
    }
}
exports.caseAllocatedPage = caseAllocatedPage;
