"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonLocators = void 0;
exports.verifyPageHeadingsByName = verifyPageHeadingsByName;
exports.verifyPageByText = verifyPageByText;
exports.clickOnButtonByName = clickOnButtonByName;
exports.selectRadioButtonByName = selectRadioButtonByName;
exports.selectCheckBoxByName = selectCheckBoxByName;
const test_1 = require("@playwright/test");
async function verifyPageHeadingsByName(page, pageHeadingName) {
    await (0, test_1.expect)(page.getByRole('heading', { name: `${pageHeadingName}` })).toBeVisible();
}
async function verifyPageByText(page, pageTextName) {
    await (0, test_1.expect)(page.getByText(`${pageTextName}`, { exact: true })).toBeVisible();
}
async function clickOnButtonByName(page, buttonName) {
    await (0, test_1.expect)(page.getByRole('button', { name: `${buttonName}` })).toBeVisible();
    await page.getByRole('button', { name: `${buttonName}` }).click();
}
async function selectRadioButtonByName(page, radioButtonName) {
    await (0, test_1.expect)(page.getByRole('radio', { name: `${radioButtonName}` })).toBeVisible();
    await page.getByRole('radio', { name: `${radioButtonName}` }).check();
    const isChecked = await page.getByRole('radio', { name: `${radioButtonName}` }).isChecked();
    (0, test_1.expect)(isChecked).toBeTruthy();
}
async function selectCheckBoxByName(page, checkBoxName) {
    await (0, test_1.expect)(page.getByRole('checkbox', { name: `${checkBoxName}` })).toBeVisible();
    await page.getByRole('checkbox', { name: `${checkBoxName}` }).check();
    const isChecked = await page.getByRole('checkbox', { name: `${checkBoxName}` }).isChecked();
    (0, test_1.expect)(isChecked).toBeTruthy();
}
exports.commonLocators = {
    verifyPageHeadingsByName,
    verifyPageByText,
    clickOnButtonByName,
    selectRadioButtonByName,
    selectCheckBoxByName
};
