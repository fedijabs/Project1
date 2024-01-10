import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test('Verify Successful Purchase of Samsung Galaxy S7 from DemoBlaze', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goToDemoBlaze();

  await homePage.navigateToPhones();
  await homePage.selectSamsungGalaxyS7();

  await homePage.addToCart();
  await homePage.goToCart();

  
  await homePage.placeOrder();
  await homePage.fillOrderDetails('fedija', 'Your Country', 'Your City', '12345');

  await homePage.purchase();

  // Assertions
  const confirmationText = await homePage.getConfirmationText();
  expect(confirmationText).toContain('Thank you for the purchase!');
});




