import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test('Verify User Navigation to Contact Page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goToDemoBlaze();

  
  const pageTitle = await homePage.getTitle();
  expect(pageTitle).toContain('STORE');


  await homePage.navigateToContact();

  const isNewMessageVisible = await homePage.isNewMessageVisible();
  expect(isNewMessageVisible).toBeTruthy();
});

