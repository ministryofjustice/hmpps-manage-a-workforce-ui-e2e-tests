import { TestInfo } from '@playwright/test';

export function getRunMode(testInfo: TestInfo): 'headless' | 'headed' {
  return testInfo.project.use.headless ? 'headless' : 'headed';
}