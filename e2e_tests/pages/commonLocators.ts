import { Page, expect } from "@playwright/test";

import { generateRandomParagraph } from '@utils/generateRandomParagraph';

export async function verifyPageHeadingsByName(page: Page, pageHeadingName: string) {
    await expect(page.getByRole('heading', { name: `${pageHeadingName}` })).toBeVisible();
}

export async function verifyPageByText(page: Page, pageTextName: string) {
    await expect(page.getByText(`${pageTextName}`, { exact: true })).toBeVisible();
}

export async function clickOnButtonByName(page: Page, buttonName: string) {
    await expect(page.getByRole('button', { name: `${buttonName}` })).toBeVisible();
    await page.getByRole('button', { name: `${buttonName}` }).click();
}

export async function selectRadioButtonByName(page: Page, radioButtonName: string) {
    await expect(page.getByRole('radio', { name: `${radioButtonName}` })).toBeVisible();
    await page.getByRole('radio', { name: `${radioButtonName}` }).check();
    const isChecked = await page.getByRole('radio', { name: `${radioButtonName}` }).isChecked();
    expect(isChecked).toBeTruthy();
}

export async function selectCheckBoxByName(page: Page, checkBoxName: string) {
    await expect(page.getByRole('checkbox', { name: `${checkBoxName}` })).toBeVisible();
    await page.getByRole('checkbox', { name: `${checkBoxName}` }).check();
    const isChecked = await page.getByRole('checkbox', { name: `${checkBoxName}` }).isChecked();
    expect(isChecked).toBeTruthy();
}

export async function fillTextInTextArea(page: Page) {
    const textArea = page.locator('xpath=//*[@id="instructions"]');
    await textArea.click();
    await expect(textArea).toBeEditable();
    await textArea.fill(generateRandomParagraph(100));

}

export const commonLocators = {
    verifyPageHeadingsByName,
    verifyPageByText,
    clickOnButtonByName,
    selectRadioButtonByName,
    selectCheckBoxByName,
    fillTextInTextArea
};