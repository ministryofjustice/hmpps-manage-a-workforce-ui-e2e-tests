import { Page, expect } from "@playwright/test";

import { commonLocators, verifyLinkIsVisibleByName, verifyPageByText } from "./common-functions";

export class noPermissionToViewThisPage {
    constructor(public page: Page) {
    }

    async completeNoPermissionToViewThisPage(mode: 'headless' | 'headed',
        page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-noPermissionToViewThisPage.png', {
                fullPage: true,
                threshold: 0.2
            });
        } else {
            console.log('noPermissionToViewThisPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageTitle(page, 'No Access');
        await commonLocators.verifyPageHeadingsByName(
            page, 'You do not have permission to view this page');
        await verifyPageByText(page, `This could be because you're trying to view either:
                a restricted access case
                a region you do not have access to
                What to do next
                If this is a restricted access case you should check NDelius if you need access or further information.
                If you do not have access to this region you should return to the Select your region page to see which teams you can allocate cases to.`);
        await verifyLinkIsVisibleByName(page, 'Select your region page')
    }
}
