import { Page, expect } from '@playwright/test'
import { commonLocators } from './common-functions'

export class emailRecepientsPage {
    constructor(private page: Page) { }

    async completeEmailRecepientsPage(mode: 'headless' | 'headed', page: Page = this.page,
         tagName?: string): Promise<void> {
                if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-emailRecepientsPage.png', {
                fullPage: true
            });
        } else {
            console.log('emailRecepientsPage - Skipping screenshot assertion in headed mode');
        }
        if (tagName) {
            await commonLocators.verifyTagOnThePage(page, tagName);
        }
        await commonLocators.verifyPageHeadingsByName(page, 'Choose who will receive these allocation notes');
        await commonLocators.enterEmailAddressInCombobox(this.page); // Fills 1st email address from email.json
        await commonLocators.clickOnButtonByName(page, 'Allocate case');
    }
}
