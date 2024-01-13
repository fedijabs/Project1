import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test.describe('Demo Blaze - product description - test10', () => {
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

  test('Verify Sorting Functionality of product displaying details', async () => {
    const websiteTitle = await homePage.getTitle();
    expect(websiteTitle).toContain('STORE');

  await homePage.selectSamsungGalaxyS7();
  await homePage.isNewMPDVisible();
  
  
  });
});