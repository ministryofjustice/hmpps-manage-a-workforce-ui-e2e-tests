import { Page, expect } from "@playwright/test";

import { commonLocators } from "./commonLocators";

export class unallocatedCasesPage {
    constructor(public page: Page) { }

    async completeUnallocatedCasesPage(mode: 'headless' | 'headed', page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-unallocatedCasesPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, "Unallocated cases");

        const firstRow = page.locator('tbody.govuk-table__body > tr.govuk-table__row').first();
        const firstCellLink = firstRow.locator('td.govuk-table__cell a').first();

        if (await firstCellLink.isEnabled()) {
            const personName = await firstCellLink.innerText();
            console.log(`unallocatedCasesPage - Clicking on the case for person: ${personName}`);
            await firstCellLink.click();
        } else {
            console.log(`unallocatedCasesPage - First cell link is not enabled — skipping click`);
        }
        await page.waitForTimeout(5000);
    }
}