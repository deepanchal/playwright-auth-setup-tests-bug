import { test as setup } from '@playwright/test';

setup('authenticate as user', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(4000);
  await page.context().storageState({ path: 'playwright/.auth/normal-user.json' });
});

setup('authenticate as admin', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(4000);
  await page.context().storageState({ path: 'playwright/.auth/admin-user.json' });
});

