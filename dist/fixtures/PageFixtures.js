"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_1 = require("@playwright/test");
const _10_allocateTheCasePage_1 = require("@pages/10-allocateTheCasePage");
const _07_allocateToAProbationPractitionerPage_1 = require("@pages/07-allocateToAProbationPractitionerPage");
const _11_caseAllocatedPage_1 = require("@pages/11-caseAllocatedPage");
const _06_caseSummaryPage_1 = require("@pages/06-caseSummaryPage");
const envConfig_json_1 = __importDefault(require("@env-config/envConfig.json"));
const _02_pduPage_1 = require("@pages/02-pduPage");
const _01_regionsPage_1 = require("@pages/01-regionsPage");
const _09_reviewYourAllocationNotesPage_1 = require("@pages/09-reviewYourAllocationNotesPage");
const _03_selectYourTeamsPage_1 = require("@pages/03-selectYourTeamsPage");
const _05_unallocatedCasesPage_1 = require("@pages/05-unallocatedCasesPage");
const _08_youAreAllocatingPage_1 = require("@pages/08-youAreAllocatingPage");
const _04_yourTeamsPage_1 = require("@pages/04-yourTeamsPage");
const error504_serviceTemporarilyUnavailablePage_1 = require("../pages/error504-serviceTemporarilyUnavailablePage");
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
        await use(new _01_regionsPage_1.regionsPage(page));
    },
    pduPage: async ({ page }, use) => {
        await use(new _02_pduPage_1.pduPage(page));
    },
    selectYourTeamsPage: async ({ page }, use) => {
        await use(new _03_selectYourTeamsPage_1.selectYourTeamsPage(page));
    },
    yourTeamsPage: async ({ page }, use) => {
        await use(new _04_yourTeamsPage_1.yourTeamsPage(page));
    },
    unallocatedCasesPage: async ({ page }, use) => {
        await use(new _05_unallocatedCasesPage_1.unallocatedCasesPage(page));
    },
    caseSummaryPage: async ({ page }, use) => {
        await use(new _06_caseSummaryPage_1.caseSummaryPage(page));
    },
    allocateToAProbationPractitionerPage: async ({ page }, use) => {
        await use(new _07_allocateToAProbationPractitionerPage_1.allocateToAProbationPractitionerPage(page));
    },
    youAreAllocatingPage: async ({ page }, use) => {
        await use(new _08_youAreAllocatingPage_1.youAreAllocatingPage(page));
    },
    reviewYourAllocationNotesPage: async ({ page }, use) => {
        await use(new _09_reviewYourAllocationNotesPage_1.reviewYourAllocationNotesPage(page));
    },
    allocateTheCasePage: async ({ page }, use) => {
        await use(new _10_allocateTheCasePage_1.allocateTheCasePage(page));
    },
    caseAllocatedPage: async ({ page }, use) => {
        await use(new _11_caseAllocatedPage_1.caseAllocatedPage(page));
    },
    serviceTemporarilyUnavailablePage: async ({ page }, use) => {
        await use(new error504_serviceTemporarilyUnavailablePage_1.serviceTemporarilyUnavailablePage(page));
    }
});
