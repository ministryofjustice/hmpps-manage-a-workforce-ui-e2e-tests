import { Page, expect } from "@playwright/test";

import emailData from '@test-data/email.json';
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
    const nextTextArea = page.locator('xpath=//*[@id="instructions"]');
    await expect(nextTextArea).toBeVisible();
    await expect(nextTextArea).toHaveText(filledText);
}

export async function enterEmailAddressInCombobox(page: Page, count: number = 1) {
  const emailList = emailData['Email address'];

  if (!emailList || emailList.length === 0) {
    console.warn('No email data found in email.json');
    return;
  }

  const emailsToFill = emailList.slice(0, count);

  for (const [index, entry] of emailsToFill.entries()) {
    const email = entry.email;
    await page.getByRole('combobox', { name: 'Email address' }).click();
    await page.getByRole('combobox', { name: 'Email address' }).fill(email);
    console.log(`Filled email ${index + 1}: ${email}`);
    await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
    await page.getByRole('button', { name: 'Add another person' }).click();
  }
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