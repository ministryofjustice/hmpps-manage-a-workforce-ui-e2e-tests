"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unallocatedCasesPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class unallocatedCasesPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeUnallocatedCasesPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-unallocatedCasesPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('unallocatedCasesPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, "Unallocated cases");
        const rows = page.locator('tbody.govuk-table__body > tr.govuk-table__row');
        const rowCount = await rows.count();
        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const link = row.locator('td.govuk-table__cell a');
            if (await link.count() > 0 && await link.isVisible() && await link.isEnabled()) {
                await link.click();
                console.log(`Clicked link in row ${i + 1}`);
                break;
            }
        }
    }
}
exports.unallocatedCasesPage = unallocatedCasesPage;
