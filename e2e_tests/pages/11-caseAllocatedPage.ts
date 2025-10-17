import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class caseAllocatedPage {
    constructor(private page: Page) { }

    async completeCaseAllocatedPage(page: Page = this.page): Promise<void> {
        await commonLocators.verifyPageHeadingsByName(page, 'Case allocated');
        await commonLocators.verifyPageHeadingsByName(page, 'What happens next');
        await commonLocators.clickOnLinkByName(page, 'Return to unallocated cases');
        await commonLocators.verifyPageHeadingsByName(page, 'Unallocated cases');    
    }
}