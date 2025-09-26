"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNoErrorHeading = verifyNoErrorHeading;
const test_1 = require("@playwright/test");
async function verifyNoErrorHeading(page) {
    await (0, test_1.expect)(page.getByRole('heading')).not.toHaveText('Page not found');
}
