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
        
        // Locate the first row in the table body
        const firstRow = page.locator('tbody.govuk-table__body > tr.govuk-table__row').first();

        // Fetch the actual name of the person and click the first link inside the first cell of that row
        const personName = firstRow.locator('td.govuk-table__cell a').first().innerText();
        console.log(`Clicking on the case for person: ${await personName}`);
        await firstRow.locator('td.govuk-table__cell a').first().click();
        await page.waitForTimeout(5000);
    }
}

// TODO: Add verification for links within each section and click them to ensure navigation works correctly.