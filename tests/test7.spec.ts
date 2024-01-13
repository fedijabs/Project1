import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test.describe('Demo Blaze - Categories - Sorting Functionality - test2', () => {
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

  test('Verify Sorting Functionality in the Products Category', async () => {
    const websiteTitle = await homePage.getTitle();
    expect(websiteTitle).toContain('STORE');

    await homePage.navigateToCategories('Monitors');

    const categoryTitle = await homePage.getCategoryTittle();
    expect(categoryTitle).toContain('Monitors');

    const isLaptopsCategoryOpen = await homePage.isCategoryOpen('Monitors');
    expect(isLaptopsCategoryOpen).toBe(true);

    console.log('Test steps executed successfully.');

    const executionDate = new Date().toLocaleDateString('en-US');
    console.log('Test Execution date:', executionDate);
  });
});
