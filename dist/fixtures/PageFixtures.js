"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_1 = require("@playwright/test");
const envConfig_json_1 = __importDefault(require("@env-config/envConfig.json"));
const pduPage_1 = require("@pages/pduPage");
const regionsPage_1 = require("@pages/regionsPage");
const selectYourTeamsPage_1 = require("@pages/selectYourTeamsPage");
exports.test = test_1.test.extend({
    context: async ({ browser }, use) => {
        const context = await browser.newContext({
            viewport: { width: 1920, height: 1080 }, // Chromium only
            deviceScaleFactor: 1,
        });
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
        await page.goto(`${baseURL}/regions`);
        await use(page);
        await page.close();
    },
    regionsPage: async ({ page }, use) => {
        await use(new regionsPage_1.regionsPage(page));
    },
    pduPage: async ({ page }, use) => {
        await use(new pduPage_1.pduPage(page));
    },
    selectYourTeamsPage: async ({ page }, use) => {
        await use(new selectYourTeamsPage_1.selectYourTeamsPage(page));
    }
});
