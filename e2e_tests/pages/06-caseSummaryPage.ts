import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class caseSummaryPage {
    constructor(private page: Page) { }

    async completeCaseSummaryPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-caseSummaryPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('caseSummaryPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, 'Summary');
        await commonLocators.fillTextInTextArea(this.page);
        await commonLocators.clickOnButtonByName(this.page, 'Continue');
    }

    async editTabsOnSummaryPageAndDownloadAttachment(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-caseSummaryPageWithAttachment.png'), {
                fullPage: true,
                threshold: 0.2
            };
        } else {
            console.log('caseSummaryPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(page, 'Summary');
        await commonLocators.fillTextInTextArea(page, 'Text 1 on Summary tab')
        await commonLocators.clickOnLinkByName(page, 'Probation record');
        await commonLocators.fillTextInTextArea(page, 'Text 2 Edited on Probation record tab')
        await commonLocators.clickOnLinkByName(page, 'Risk');
        await commonLocators.fillTextInTextArea(page, 'Text 3 Edited on Risk tab')
        await commonLocators.clickOnLinkByName(page, 'Summary');
        await commonLocators.verifyFilledTextArea(page, 'Text 3 Edited on Risk tab')
        await commonLocators.clickOnLinkByName(page, 'Go to the Risk screen');
        await commonLocators.verifyFilledTextArea(page, 'Text 3 Edited on Risk tab')
        await commonLocators.clickOnLinkByName(page, 'Documents');
        await commonLocators.fillTextInTextArea(page, 'Text 4 Edited on Documents tab')
        await page.pause();

        }

}