import { Page, expect } from "@playwright/test";

export async function verifyPageHeadingsByName(page: Page, pageHeadingName: string) {
    await expect(page.getByRole('heading', { name: `${pageHeadingName}` })).toBeVisible();
    //await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "${pageHeadings}" [level=1]`);
    //await expect(page.getByRole('caption')).toContainText('Your teams');
    //await expect(page.getByText(`${pageHeadingsOrText}`, { exact: true })).toBeVisible();
}

export async function verifyPageByText(page: Page, pageTextName: string) {
    await expect(page.getByText(`${pageTextName}`, { exact: true })).toBeVisible();
}

export async function clickOnButtonByName(page: Page, buttonName: string) {
    await expect(page.getByRole('button', { name: `${buttonName}` })).toBeVisible();
    await page.getByRole('button', { name: `${buttonName}` }).scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: `${buttonName}` }).click();
}

export async function clickOnRadioButtonByName(page: Page, radioButtonName: string) {
    await expect(page.getByRole('radio', { name: `${radioButtonName}` })).toBeVisible();
    await page.getByRole('radio', { name: `${radioButtonName}` }).check();
    const isChecked = await page.getByRole('radio', { name: `${radioButtonName}` }).isChecked();
    expect(isChecked).toBeTruthy();
}

export async function clickOnCheckBoxByName(page: Page, checkBoxName: string) {
    await expect(page.getByRole('checkbox', { name: `${checkBoxName}` })).toBeVisible();
    await page.getByRole('checkbox', { name: `${checkBoxName}` }).check();
    const isChecked = await page.getByRole('checkbox', { name: `${checkBoxName}` }).isChecked();
    expect(isChecked).toBeTruthy();
}

export const commonLocators = {
    verifyPageHeadingsByName,
    verifyPageByText,
    clickOnButtonByName,
    clickOnRadioButtonByName,
    clickOnCheckBoxByName
};