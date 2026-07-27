import { Page, expect } from '@playwright/test'
import { commonLocators } from './common-functions'

export class emailRecepientsPage {
    constructor(private page: Page) { }

    async completeEmailRecepientsPage(page: Page = this.page, restricted?: string) {
        if (restricted) {
            await commonLocators.verifyRestrictedTagOnThePage(page, restricted);
        }
        await commonLocators.verifyPageHeadingsByName(page, 'Choose who will receive these allocation notes');
        await commonLocators.enterEmailAddressInCombobox(this.page); // Fills 1st email address from email.json
        await commonLocators.clickOnButtonByName(page, 'Allocate case');
    }
}
