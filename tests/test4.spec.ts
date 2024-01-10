import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test('User Registration Test', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToDemoBlaze();

  const pageTitle = await homePage.getTitle();
  expect(pageTitle).toContain('STORE');

  await homePage.navigateToSignUp();

  await homePage.fillRegistrationForm('TestUser', 'TestPassword');
  await homePage.clickSignUpButton();

  const isRegistrationSuccessful = await homePage.isRegistrationSuccessful();
  expect(isRegistrationSuccessful).toBeTruthy();
});