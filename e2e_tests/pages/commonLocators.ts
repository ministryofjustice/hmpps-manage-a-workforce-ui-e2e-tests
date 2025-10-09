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

export async function clickOnLinkByName(page: Page, linkName: string) {
    await expect(page.getByRole('link', { name: `${linkName}` })).toBeVisible();
    await page.getByRole('link', { name: `${linkName}` }).click();
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

export async function fillTextInTextArea(page: Page): Promise<string> {
    const textArea = page.locator('xpath=//*[@id="instructions"]');
    await textArea.click();
    await expect(textArea).toBeEditable();
    const paragraph = generateRandomParagraph(100);
    await textArea.fill(paragraph);
    return paragraph;
}

export async function verifyFilledTextArea(page: Page) {
    const filledText = await fillTextInTextArea(page);
    // Locate the same textarea and verify its content
    const nextTextArea = page.locator('xpath=//*[@id="instructions"]');
    await expect(nextTextArea).toBeVisible();
    await expect(nextTextArea).toHaveText(filledText);
}

export async function enterEmailAddressInCombobox(page: Page, email: string) {
    await page.getByRole('combobox', { name: 'Email address' }).click();
    await page.getByRole('combobox', { name: 'Email address' }).fill(email);
    await expect(page.getByRole('listbox', { name: email })).toBeVisible();
    await page.getByRole('option', { name: `${email} -` }).click();
    await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
    await page.getByRole('button', { name: 'Add another person' }).click();
}

export const commonLocators = {
    verifyPageHeadingsByName,
    verifyPageByText,
    clickOnButtonByName,
    clickOnLinkByName,
    selectRadioButtonByName,
    selectCheckBoxByName,
    fillTextInTextArea,
    verifyFilledTextArea,
    enterEmailAddressInCombobox
};