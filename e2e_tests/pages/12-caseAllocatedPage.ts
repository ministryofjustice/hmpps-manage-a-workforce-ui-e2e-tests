import { Page, expect } from '@playwright/test';

import { commonLocators } from "./common-functions";

export class caseAllocatedPage {
    constructor(private page: Page) { }

    async completeCaseAllocatedPage(page: Page = this.page): Promise<void> {
        await commonLocators.verifyPageHeadingsByName(page, 'Case allocated');
        await commonLocators.verifyPageByText(page, 'Tricia Langosh (X960926) has been allocated to Coco Pint (PO)');
        await commonLocators.verifyPageHeadingsByName(page, 'What happens next');
        await commonLocators.verifyPageByText(page, 'the case and SPO Oversight contact will be saved in NDelius within 5 minutes');
        await commonLocators.verifyPageByText(page, 'your allocation notes have been emailed to Coco Pint (simulate-delivered@notifications.service.gov.uk)');
        await commonLocators.verifyPageByText(page, 'we\'ve sent you a copy of the allocation email');
        await commonLocators.verifyPageByText(page, 'we have sent a copy of the allocation email to Wellington.Kohler@justice.gov.uk');
        await commonLocators.verifyPageByText(page, 'the initial appointment is scheduled for 4 October 2025 with Coco Pint PO');
        await commonLocators.clickOnLinkByName(page, 'Return to unallocated cases');
        await commonLocators.verifyPageHeadingsByName(page, 'Unallocated cases');
    }
}
