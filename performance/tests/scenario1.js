import { browser } from 'k6/browser';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/latest/dist/bundle.js';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

const P90_THRESHOLD = __ENV.P90_THRESHOLD ? parseInt(__ENV.P90_THRESHOLD) : 200;
const P95_THRESHOLD = __ENV.P95_THRESHOLD ? parseInt(__ENV.P95_THRESHOLD) : 500;
const VUS = __ENV.VUS ? parseInt(__ENV.VUS) : 200;
const DURATION = __ENV.DURATION || "1m";

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: [`p(95)<${P95_THRESHOLD}`, `p(90)<${P90_THRESHOLD}`],
  },
  scenarios: {
    // UI in parallel
    ui_probe: {
      executor: 'constant-vus',
      vus: 2,
      duration: DURATION,
      options: {
        browser: {
          type: 'chromium',
        },
      },
      exec: 'runScn1', 
    },
  },
};

export async function runScn1() {
  const page = await browser.newPage();
  
  try {
    const baseUrl = (__ENV.BASE_URL || 'http://localhost:3007').replace(/\/$/, '');

    await page.goto(`${baseUrl}/regions`);
    
    //#region UI journey
    await page.getByRole('radio', { name: 'Wales' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('radio', { name: 'Cardiff and Vale' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('checkbox', { name: 'NPS - Wrexham - Team' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'View unallocated cases' }).click();
    await page.locator('td.govuk-table__cell a.govuk-link--no-visited-state').first().click();
    await page.getByRole('textbox', { name: 'Make notes for the' }).click();
    await page.getByRole('textbox', { name: 'Make notes for the' }).clear();
    await page.getByRole('textbox', { name: 'Make notes for the' }).fill('PERF-TESTING');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('input.govuk-radios__input').first().click();
    await page.getByRole('textbox', { name: 'Make notes for the' }).click();
    await page.getByRole('textbox', { name: 'Make notes for the' }).clear();
    await page.getByRole('textbox', { name: 'Make notes for the' }).fill('PERF-TESTING');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Make notes for the' }).click();
    await page.getByRole('textbox', { name: 'Make notes for the' }).clear();
    await page.getByRole('textbox', { name: 'Make notes for the' }).fill('PERF-TESTING');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'These notes will be sent in' }).click();
    await page.getByRole('textbox', { name: 'These notes will be sent in' }).clear();
    await page.getByRole('textbox', { name: 'These notes will be sent in' }).fill('PERF-TESTING');
    await page.getByRole('button', { name: 'Continue' }).click();
    
  } finally {
    await page.close();
  }
}

export function handleSummary(data) {
	return {
    'junit.xml': jUnit(data),
		'result.html': htmlReport(data),
		stdout: textSummary(data, { indent: ' ', enableColors: true }),
	};
}
