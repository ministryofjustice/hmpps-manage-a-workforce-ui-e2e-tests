import { Page, expect } from "@playwright/test";

import { commonLocators } from "./common-functions";

export class unallocatedCasesPage {
    constructor(public page: Page) { }

    async completeUnallocatedCasesPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-unallocatedCasesPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('unallocatedCasesPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Unallocated cases");

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