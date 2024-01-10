// pages/HomePage.ts
import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToDemoBlaze() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async getTitle() {
    return await this.page.title();
  }

  async navigateToContact() {
    const contactLink = await this.page.waitForSelector(':text-is("Contact")', { timeout: 5000 });
    await contactLink.click();
  }

  async waitForNewMessage() {
    await this.page.waitForSelector('text=New message', { timeout: 5000 });
  }
  async isNewMessageVisible() {
    const newMessageText = await this.page.textContent('text=New message');
    return newMessageText.includes('New message');
  }
  async getNewMessageText() {
    return await this.page.textContent('text=New message');
  }

  async fillContactEmail(email: string) {
    await this.page.getByLabel('Contact Email:').fill(email);
  }

  async fillContactName(name: string) {
    await this.page.getByLabel('Contact Name').fill(name);
  }

  async fillMessage(message: string) {
    await this.page.getByLabel('Message:').fill(message);
  }
  async navigateToSignUp() {
    const signUpLink = await this.page.waitForSelector('#signUpLink', { timeout: 5000 });
    await signUpLink.click();
  }

  async fillRegistrationForm(username: string, password: string) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);
    
  }

  async clickSignUpButton() {
    await this.page.click('text=Sign up');
  }

  async isRegistrationSuccessful() {
    return await this.page.waitForSelector('text=User is successfully registered', { timeout: 5000 });
  }
  async navigateToPhones() {
    await this.page.click('text=Phones');
  }

  async selectSamsungGalaxyS7() {
    await this.page.click('text=Samsung galaxy s7');
    await this.page.waitForLoadState('load');
  }

  async addToCart() {
    await this.page.waitForSelector('text=Add to cart', { timeout: 6000 });
    await this.page.click('text=Add to cart', { timeout: 6000 });
  }

  async goToCart() {
    await this.page.click('text=Cart', { timeout: 6000 });
    await this.page.waitForSelector('text=Products');
  }

  async placeOrder() {
    const placeOrderButton = await this.page.getByRole('button', { name: 'Place order' });
    await placeOrderButton.click();
    await this.page.waitForSelector('#orderModalLabel');
  }

  async fillOrderDetails(name: string, country: string, city: string, card: string) {
    await this.page.fill('#name', name);
    await this.page.fill('#country', country);
    await this.page.fill('#city', city);
    await this.page.fill('#card', card);
  }

  async purchase() {
    await this.page.click('text=Purchase');
    await this.page.waitForSelector('text=Thank you for your purchase!');
  }

  async getConfirmationText() {
    return await this.page.textContent('text=Thank you for the purchase!');
  }
  
  async navigateToCategories() {
    const categoriesLink = await this.page.waitForSelector(':text-is("CATEGORIES")', { timeout: 5000 });
    await categoriesLink.click();
  }
  
  async getCategoryTittle() {
    return await this.page.textContent('text=Laptops');
 }
 async isCategoryOpen(categoryName) {
    const isOpen = await this.page.waitForSelector(`:text-is("${categoryName}")`);
    return !!isOpen;
}
async clickSendMessage() {
    const sendMessageButton = await this.page.waitForSelector('button:has-text("Send Message")', { timeout: 60000 });
    await sendMessageButton.click();
  }
  async isMessageSuccessful() {
    const successMessage = await this.page.waitForSelector(':has-text("Thanks for the message!!")', { timeout: 60000 });
    return successMessage !== null; // Return true if the element is found, false otherwise
  }
}

