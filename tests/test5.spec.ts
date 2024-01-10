// tests/contactTest.ts
import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';

test('Sending a message and contacting the website', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goToDemoBlaze();

  const pageTitle = await homePage.getTitle();
  expect(pageTitle).toContain('STORE');

  await homePage.navigateToContact();
  await homePage.waitForNewMessage();

  const newMessageText = await homePage.getNewMessageText();
  expect(newMessageText).toContain('New message');

  await homePage.fillContactEmail('example@gmail.com');
  await homePage.fillContactName('Name');
  await homePage.fillMessage('write a message');

  await homePage.clickSendMessage();


  //const isMessageSuccessful = await homePage.isMessageSuccessful();
  //expect(isMessageSuccessful).toBeTruthy();

});
