"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_1 = require("@playwright/test");
const envConfig_json_1 = __importDefault(require("@env-config/envConfig.json"));
const yourTeamsPage_1 = require("@pages/yourTeamsPage");
exports.test = test_1.test.extend({
    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },
    baseURL: async ({}, use) => {
        const env = process.env.TEST_ENV || 'local';
        const url = envConfig_json_1.default[env].baseURL;
        console.log(`Running tests against environment: ${env} - ${url}`);
        await use(url);
    },
    page: async ({ context, baseURL }, use) => {
        const page = await context.newPage();
        await page.goto(`${baseURL}/regions`); // Replace with actual base URL
        //await page.waitForTimeout(5000);
        await use(page);
        await page.close();
    },
    yourTeamsPage: async ({ page }, use) => {
        await use(new yourTeamsPage_1.yourTeamsPage(page));
    },
});
