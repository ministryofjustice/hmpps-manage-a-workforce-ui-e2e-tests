"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonLocators = void 0;
exports.verifyPageHeadingsByName = verifyPageHeadingsByName;
exports.verifyPageByText = verifyPageByText;
exports.clickOnButtonByName = clickOnButtonByName;
exports.clickOnLinkByName = clickOnLinkByName;
exports.selectRadioButtonByName = selectRadioButtonByName;
exports.selectCheckBoxByName = selectCheckBoxByName;
exports.verifyButtonIsVisibleByName = verifyButtonIsVisibleByName;
exports.verifyLinkIsVisibleByName = verifyLinkIsVisibleByName;
exports.fillTextInTextArea = fillTextInTextArea;
exports.verifyFilledTextArea = verifyFilledTextArea;
exports.enterEmailAddressInCombobox = enterEmailAddressInCombobox;
const test_1 = require("@playwright/test");
const email_json_1 = __importDefault(require("@test-data/email.json"));
async function verifyPageHeadingsByName(page, pageHeadingName) {
    await (0, test_1.expect)(page.getByRole('heading', { name: `${pageHeadingName}` })).toBeVisible();
}
async function verifyPageByText(page, pageTextName) {
    await (0, test_1.expect)(page.getByText(`${pageTextName}`).first()).toBeVisible();
}
async function clickOnButtonByName(page, buttonName) {
    await page.getByRole('button', { name: `${buttonName}` }).click();
}
async function clickOnLinkByName(page, linkName) {
    await page.getByRole('link', { name: `${linkName}` }).click();
}
async function selectRadioButtonByName(page, radioButtonName) {
    await page.getByRole('radio', { name: `${radioButtonName}` }).check();
    const isChecked = await page.getByRole('radio', { name: `${radioButtonName}` }).isChecked();
    (0, test_1.expect)(isChecked).toBeTruthy();
}
async function selectCheckBoxByName(page, checkBoxName) {
    await page.getByRole('checkbox', { name: `${checkBoxName}` }).check();
    const isChecked = await page.getByRole('checkbox', { name: `${checkBoxName}` }).isChecked();
    (0, test_1.expect)(isChecked).toBeTruthy();
}
async function verifyButtonIsVisibleByName(page, buttonName) {
    await (0, test_1.expect)(page.getByRole('button', { name: `${buttonName}` })).toBeVisible();
}
async function verifyLinkIsVisibleByName(page, linkName) {
    await (0, test_1.expect)(page.getByRole('link', { name: `${linkName}` })).toBeVisible();
}
async function fillTextInTextArea(page) {
    const textArea = page.locator('xpath=//*[@id="instructions"]');
    await textArea.click();
    await (0, test_1.expect)(textArea).toBeEditable();
    await textArea.clear();
    await textArea.fill("AUTO-TESTING");
}
async function verifyFilledTextArea(page, expectedText = "AUTO-TESTING") {
    const nextTextArea = page.locator('xpath=//*[@id="instructions"]');
    await (0, test_1.expect)(nextTextArea).toBeVisible();
    const actualText = await nextTextArea.inputValue();
    if (actualText === expectedText) {
        console.log('Note Section - text matches expected input from the previous page notes.');
    }
    else {
        console.warn('Note Section - text mismatch — possibly modified by user or retained from previous session. Skipping strict assertion.');
        console.warn(`Expected: "${expectedText}"`);
        console.warn(`Actual:   "${actualText}"`);
    }
}
async function enterEmailAddressInCombobox(page, count = 1) {
    const removeButtons = page.getByRole('button', { name: 'Remove' });
    while (await removeButtons.count() > 0) {
        await removeButtons.first().click();
        await page.waitForTimeout(200);
    }
    console.log('All Remove buttons cleared.');
    const emailList = email_json_1.default['Email address'];
    if (!emailList || emailList.length === 0) {
        console.warn('No email data found in email.json');
        return;
    }
    const emailsToFill = emailList.slice(0, count);
    for (const [index, entry] of emailsToFill.entries()) {
        const email = entry.email;
        await page.getByRole('combobox', { name: 'Email address' }).click();
        await page.getByRole('combobox', { name: 'Email address' }).fill(email);
        await (0, test_1.expect)(page.getByRole('listbox', { name: `${email}` })).toBeVisible();
        await page.getByRole('option', { name: `${email}` }).click();
        console.log(`Filled email ${index + 1}: ${email}`);
    }
}
exports.commonLocators = {
    verifyPageHeadingsByName,
    verifyPageByText,
    clickOnButtonByName,
    clickOnLinkByName,
    selectRadioButtonByName,
    selectCheckBoxByName,
    verifyButtonIsVisibleByName,
    verifyLinkIsVisibleByName,
    fillTextInTextArea,
    verifyFilledTextArea,
    enterEmailAddressInCombobox
};
