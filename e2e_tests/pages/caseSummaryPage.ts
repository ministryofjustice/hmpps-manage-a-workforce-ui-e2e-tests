import { Locator, Page, expect } from '@playwright/test';

import { commonLocators } from "./commonLocators";

export class SummaryPage {
    constructor(private page: Page) { }

    private readonly summaryStructure: Record<string, string[]> = {
        'Personal details': ['Name', 'Gender', 'Date of birth', 'PNC', 'Main address'],
        Sentence: ['Offence', 'Order', 'Requirements'],
        Risk: ['Risk assessment', 'Active risk registrations', 'OASys'],
        Documents: ['__linkOnly'] // Special case to indicate link-only section
    };

    private getSectionByHeading(sectionId: string): Locator {
        return this.page.locator(`//h2[@class="app-summary-card__title" and text()="${sectionId}"]`);
    }

    private getLabelLocator(section: Locator, label: string): Locator {
        return section.locator(`dt:has-text("${label}")`);
    }

    private getLinkLocator(labelLocator: Locator): Locator {
        return labelLocator.locator('xpath=following-sibling::dd[1]//a');
    }

    private async verifySectionStructure(sectionId: string, labels: string[]): Promise<void> {
        const section = this.getSectionByHeading(sectionId);
        await expect(section).toBeVisible();

        for (const label of labels) {
            const labelLocator = this.getLabelLocator(section, label);
            await expect(labelLocator).toBeVisible();
        }
    }

    private async verifyAndClickLinkIfPresent(headingText: string, label: string): Promise<void> {
        const section = this.getSectionByHeading(headingText);
        const labelLocator = this.getLabelLocator(section, label);
        const linkLocator = this.getLinkLocator(labelLocator);

        if (await linkLocator.isVisible()) {
            const href = await linkLocator.getAttribute('href');
            expect(href).toBeTruthy();

            const linkText = await linkLocator.textContent();
            expect(linkText?.trim().length).toBeGreaterThan(0);

            await linkLocator.click();
        }
    }

    // Handle sections with only a link and some text
    private async verifyLinkOnlySection(headingText: string): Promise<void> {
        const section = this.getSectionByHeading(headingText);
        await expect(section).toBeVisible();

        const linkLocator = section.locator('a');
        await expect(linkLocator).toBeVisible();

        const href = await linkLocator.getAttribute('href');
        expect(href).toBeTruthy();

        const linkText = await linkLocator.textContent();
        expect(linkText?.trim().length).toBeGreaterThan(0);

        await linkLocator.click();
    }

    async completeCaseSummaryPage(mode: 'headless' | 'headed', page: Page = this.page): Promise<void> {
        if (mode === 'headless') {
            await expect(page).toHaveScreenshot('actual-caseSummaryPage.png', {
                fullPage: true,
                threshold: 0.2,
            });
        } else {
            console.log('Skipping screenshot assertion in headed mode');
        }

        await commonLocators.verifyPageHeadingsByName(this.page, 'Summary');
        await page.waitForTimeout(5000);

        for (const [headingText, labels] of Object.entries(this.summaryStructure)) {
            if (labels.length === 1 && labels[0] === '__linkOnly') {
                await this.verifyLinkOnlySection(headingText);
            } else {
                await this.verifySectionStructure(headingText, labels);
                for (const label of labels) {
                    await this.verifyAndClickLinkIfPresent(headingText, label);
                }
            }
        }
    }
}
// TODO: Add verification for links within each section and click them to ensure navigation works correctly.