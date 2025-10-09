import { Page, expect } from '@playwright/test';

import { TIMEOUT } from 'dns';
import { commonLocators } from "./commonLocators";
import { time } from 'console';

export class caseAllocatedPage {
    constructor(private page: Page) { }

    async completecaseAllocatedPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-caseAllocatedPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('caseAllocatedPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, 'Case allocated');
        await commonLocators.verifyPageHeadingsByName(this.page, 'What happens next');
        await commonLocators.clickOnLinkByName(this.page, 'Return to unallocated cases');
        await page.waitForTimeout(3000);
        await commonLocators.verifyPageHeadingsByName(this.page, 'Unallocated cases');
    }
}