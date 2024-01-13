import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test.describe('Demo Blaze - Log in - test6', () => {
  let page;
  let homePage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    await page.goto('https://www.demoblaze.com/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Verify Log in', async () => {
    const websiteTitle = await homePage.getTitle();
    expect(websiteTitle).toContain('STORE');


  await homePage.navigateToLogin();

  await homePage.fillRegistrationForm('TestUser', 'TestPassword');
  await homePage.clickLoginButton();
})
  });