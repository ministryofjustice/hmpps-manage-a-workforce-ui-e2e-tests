import {Page, expect} from "@playwright/test";

import {commonLocators, verifyPageByText} from "./common-functions";

export class serviceTemporarilyUnavailablePage {
    constructor(public page: Page) {
    }

    async completeServiceTemporarilyUnavailablePage(mode: 'headless' | 'headed',
                                                    page: Page = this.page) {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-serviceTemporarilyUnavailablePage.png', {
                fullPage: true,
                threshold: 0.2
            });
        } else {
            console.log('serviceTemporarilyUnavailablePage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(
            this.page, 'This service is temporarily unavailable');
        await verifyPageByText(this.page, `Another service that Allocate a Person on Probation relies upon is taking too long to respond.
                Try reloading the page. You can do this by pressing F5 (on a PC), or Cmd + R (on a Mac).
                If the page still does not load, please try again later.`);
    }
}
