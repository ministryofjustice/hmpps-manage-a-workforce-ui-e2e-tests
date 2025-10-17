"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yourTeamsPage = void 0;
const test_1 = require("@playwright/test");
class yourTeamsPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async heading() {
        return this.page.getByRole('heading');
    }
    async verifyHeading() {
        await (0, test_1.expect)(this.page.getByRole('heading', { name: 'A Probation Delivery Unit' })).toBeVisible();
        //await expect(this.page.locator('h1')).toMatchAriaSnapshot(`- heading "A Probation Delivery Unit" [level=1]`);
        //await expect(this.page.getByRole('caption')).toContainText('Your teams');
        await (0, test_1.expect)(this.page.getByText('Your teams', { exact: true })).toBeVisible();
    }
    async clickViewUnallocatedCasesButton(page = this.page) {
        await this.page.getByRole('button', { name: 'View unallocated cases' }).click();
    }
}
exports.yourTeamsPage = yourTeamsPage;
