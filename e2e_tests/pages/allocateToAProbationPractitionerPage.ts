import { Page, expect } from '@playwright/test';

import { commonLocators } from "./commonLocators";

export class allocateToAProbationPractitionerPage {
    constructor(private page: Page) { }

    async completeAllocateToAProbationPractitionerPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-allocateToAProbationPractitionerPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('allocateToAProbationPractitionerPage - Skipping screenshot assertion in headed mode');
        }
        await commonLocators.verifyPageHeadingsByName(this.page, 'Allocate to a probation');

        const radios = await page.getByRole('radio').elementHandles();

        for (const radio of radios) {
            const isEnabled = await radio.isEnabled();
            if (isEnabled) {
                await radio.check();
                break; // Exit the loop after checking the first enabled radio button
            }
        }

        const secondCell = page.locator('table tr').first().locator('td').nth(1);
        const nameOfThePractitioner = secondCell.locator('a');

        if (await nameOfThePractitioner.isVisible()) {
            const nameOfThePractitionerAllocatingTo = await nameOfThePractitioner.innerText();
            console.log('allocateToPractitionerName: ', nameOfThePractitionerAllocatingTo);
        } else {
            console.log('allocateToAProbationPractitionerPage - Allocate to practitioner link is not visible');
        }

        await commonLocators.verifyFilledTextArea(this.page);
        await commonLocators.clickOnButtonByName(this.page, 'Continue');
        await page.waitForTimeout(3000);
    }
}