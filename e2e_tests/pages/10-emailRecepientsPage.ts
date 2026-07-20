import { Page , expect} from '@playwright/test'
import { clickOnButtonByName, commonLocators } from './common-functions'

export class emailRecepientsPage{
    constructor(private page: Page) {}

    async completeEmailRecepientsPage(page: Page = this.page) {
        await commonLocators.verifyPageHeadingsByName(page, 'Choose email recipients');
        await commonLocators.enterEmailAddressInCombobox(this.page); // Fills 1st email address from email.json
        await clickOnButtonByName(page, 'Allocate a case');
    }
    }
