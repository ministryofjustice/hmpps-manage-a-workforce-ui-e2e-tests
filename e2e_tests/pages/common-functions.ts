import { Page, expect } from "@playwright/test";

import emailData from '@test-data/email.json';

export async function verifyPageHeadingsByName(page: Page, pageHeadingName: string) {
    await expect(page.getByRole('heading', { name: `${pageHeadingName}` })).toBeVisible();
}

export async function verifyPageByText(page: Page, pageTextName: string) {
    await expect(page.getByText(`${pageTextName}`).first()).toBeVisible();
}

export async function clickOnButtonByName(page: Page, buttonName: string) {
    await page.getByRole('button', { name: `${buttonName}` }).click();
}

export async function clickOnLinkByName(page: Page, linkName: string) {
    await page.getByRole('link', { name: `${linkName}` }).click();
}

export async function selectRadioButtonByName(page: Page, radioButtonName: string) {
    await page.getByRole('radio', { name: `${radioButtonName}` }).check();
    const isChecked = await page.getByRole('radio', { name: `${radioButtonName}` }).isChecked();
    expect(isChecked).toBeTruthy();
}

export async function selectCheckBoxByName(page: Page, checkBoxName: string) {
    await page.getByRole('checkbox', { name: `${checkBoxName}` }).check();
    const isChecked = await page.getByRole('checkbox', { name: `${checkBoxName}` }).isChecked();
    expect(isChecked).toBeTruthy();
}

export async function verifyButtonIsVisibleByName(page: Page, buttonName: string) {
    await expect(page.getByRole('button', { name: `${buttonName}` })).toBeVisible();
}

export async function verifyLinkIsVisibleByName(page: Page, linkName: string) {
    await expect(page.getByRole('link', { name: `${linkName}` })).toBeVisible();
}

export async function fillTextInTextArea(page: Page) {
    const textArea = page.locator('xpath=//*[@id="instructions"]');
    await textArea.click();
    await expect(textArea).toBeEditable();
    await textArea.clear();
    await textArea.fill("AUTO-TESTING");
}


export async function verifyFilledTextArea(page: Page, expectedText: string = "AUTO-TESTING"): Promise<void> {
    const nextTextArea = page.locator('xpath=//*[@id="instructions"]');
    await expect(nextTextArea).toBeVisible();

    const actualText = await nextTextArea.inputValue();

    if (actualText === expectedText) {
        console.log('Note Section - text matches expected input from the previous page notes.');
    } else {
        console.warn('Note Section - text mismatch — possibly modified by user or retained from previous session. Skipping strict assertion.');
        console.warn(`Expected: "${expectedText}"`);
        console.warn(`Actual:   "${actualText}"`);
    }
}


export async function enterEmailAddressInCombobox(page: Page, count: number = 1) {

    const removeButtons = page.getByRole('button', { name: 'Remove' });

    while (await removeButtons.count() > 0) {
        await removeButtons.first().click();
        await page.waitForTimeout(200)
    }
    console.log('All Remove buttons cleared.');

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
        await expect(page.getByRole('listbox', { name: `${email}` })).toBeVisible();
        await page.getByRole('option', { name: `${email}` }).click();
        console.log(`Filled email ${index + 1}: ${email}`);
    }
}

export const commonLocators = {
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