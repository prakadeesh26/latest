import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given('I am on the Magento login page', async () => {
  browser = await chromium.launch({ headless: false, args: ['--start-maximized']  });
  context = await browser.newContext({ viewport: null});
  page = await context.newPage();

  await page.goto('https://magento.softwaretestingboard.com/customer/account/login/');
});

When('I enter the username {string}', async (username: string) => {
  await page.fill('#email', username);
});

When('I enter the password {string}', async (password: string) => {
  await page.fill('#pass', password);
});

When('I click the login button', async () => {
  await page.click('#send2');
});

Then('I should be redirected to the dashboard', async () => {
  await expect(page).toHaveTitle(/My Account/);
});





Given('I navigate to the Men -> Tops -> Jackets section', async () => {

  await page.goto('https://magento.softwaretestingboard.com/');

 // await page.click('.level0 nav-3 category-item level-top parent ui-menu-item');
// await page.click('.nav-menu-men');
// await page.click('.menu-item.men');

  await page.getByRole('menuitem', {name: ' Men'}).click();
  await page.getByRole('link', {name: 'Jackets'}).click();
  await page.getByRole('link', {name: 'Proteus Fitness Jackshirt'}).first().click();
  await page.getByLabel('M', {exact: true}).click();
  await page.getByLabel('Orange').click();
  await page.getByRole('button', {name: 'Add to Cart'}).click();
  await page.waitForLoadState('networkidle');


  await page.getByRole('menuitem', {name: ' Men'}).click();
  await page.getByRole('link', {name: 'Jackets'}).click();
  await page.getByRole('link', {name: 'Montana Wind Jacket'}).first().click();
  await page.getByLabel('M', {exact: true}).click();
  await page.getByLabel('Red').click();
  await page.getByRole('button', {name: 'Add to Cart'}).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('menuitem', {name: ' Men'}).click();
  await page.getByRole('link', {name: 'Pants', exact: true}).click();
  await page.getByRole('link', {name: 'Cronus Yoga Pant'}).first().click();
  await page.getByLabel('36').click();
  await page.getByLabel('Red').click();
  await page.getByRole('button', {name: 'Add to Cart'}).click();
  await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
//});

//When('I provide the shipping address and complete the order', async () => {
  // Proceed to checkout
  // await page.getByRole('button', {name: 'Proceed to Checkout'}).click();
  // await page.waitForLoadState('networkidle');

  await page.getByRole('button', {name: 'New Address'}).click();

  // Fill in Sydney shipping address details
  await page.fill('input[name="street[0]"]', '123 George St');
  await page.fill('input[name="city"]', 'Sydney');
  await page.selectOption('select[name="country_id"]', { label: 'Australia' });
  await page.selectOption('select[name="region_id"]', { label: 'New South Wales' });
  await page.fill('input[name="postcode"]', '2000');
  await page.fill('input[name="telephone"]', '0298765432');
  console.log("1");
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('checkbox', {name: 'Save in address book'})).toBeEditable();
  await page.getByRole('checkbox', {name: 'Save in address book'}).uncheck();
  await page.waitForLoadState('load');
  console.log("I 1");

  await expect(page.getByRole('button', {name: 'Ship here'})).toBeVisible();
  await page.getByRole('button', {name: 'Ship here'}).click();
  await page.waitForLoadState('load');
  console.log("I am here 1");
  // Continue to payment
  await page.click('button.continue');
  await page.waitForLoadState('load');
  console.log("I am here 2");
  await page.waitForTimeout(10000);

  // Place the order
  await page.click('text=Place Order');
  await page.waitForTimeout(10000);
  console.log("I am here 3");
//});

//Then('I should see a confirmation message', async () => {
  await page.waitForSelector('text=Thank you for your purchase!');
  const confirmationText = await page.textContent('.checkout-success');
  expect(confirmationText).toContain('Thank you for your purchase!');
  await browser.close();
});
