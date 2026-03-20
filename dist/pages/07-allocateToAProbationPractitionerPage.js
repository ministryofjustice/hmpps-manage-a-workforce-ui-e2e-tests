"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allocateToAProbationPractitionerPage = void 0;
const test_1 = require("@playwright/test");
const common_functions_1 = require("./common-functions");
class allocateToAProbationPractitionerPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async completeAllocateToAProbationPractitionerPage(mode, page = this.page) {
        if (mode === 'headless') {
            await (0, test_1.expect)(page).toHaveScreenshot('actual-allocateToAProbationPractitionerPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        }
        else {
            console.log('allocateToAProbationPractitionerPage - Skipping screenshot assertion in headed mode');
        }
        await common_functions_1.commonLocators.verifyPageHeadingsByName(this.page, 'Allocate to a probation');
        const radios = await page.getByRole('radio').elementHandles();
        for (const radio of radios) {
            const isEnabled = await radio.isEnabled();
            if (isEnabled) {
                await radio.check();
                break;
            }
        }
        const secondCell = page.locator('table tr').first().locator('td').nth(1);
        const nameOfThePractitioner = secondCell.locator('a');
        if (await nameOfThePractitioner.isVisible()) {
            const nameOfThePractitionerAllocatingTo = await nameOfThePractitioner.innerText();
            console.log('allocateToPractitionerName: ', nameOfThePractitionerAllocatingTo);
        }
        else {
            console.log('allocateToAProbationPractitionerPage - Allocate to practitioner link is not visible');
        }
        await common_functions_1.commonLocators.verifyFilledTextArea(page);
        await common_functions_1.commonLocators.clickOnButtonByName(this.page, 'Continue');
    }
}
exports.allocateToAProbationPractitionerPage = allocateToAProbationPractitionerPage;
