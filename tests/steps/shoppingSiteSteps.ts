import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "playwright";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { Before, After } from "@cucumber/cucumber";
import * as fs from "fs";
import * as path from "path";
import { MensProductsPage } from "../../pages/MensProductsPage";
import { ShippingDetailsPage } from "../../pages/ShippingDetailsPage";
import { VerifyOrderPage } from "../../pages/VerifyOrderPage";

var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;
let mensProductsPage: MensProductsPage;
let shippingDetailsPage: ShippingDetailsPage;
let verifyOrderPage: VerifyOrderPage;
let data: any;

Before(async () => {
  // Load data from JSON file
  const dataPath = path.join(__dirname, "../../data/australiaData.json");
  data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  browser = await chromium.launch({
    headless: true,
    args: ["--start-maximized"],
  });
  context = await browser.newContext({ viewport: null });
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});

Given("The user logs in to the Magento shopping site", async () => {
  loginPage = new LoginPage(page);
  await loginPage.login(data.user.username, data.user.password);
});

Given(
  "The user navigate to the Mens page and choose first jacket {string} with {string} and {string}",
  async (product: string, size: string, color: string) => {
    mensProductsPage = new MensProductsPage(page);
    await mensProductsPage.selectJacket(product, size, color);
  }
);

When(
  "The user navigate to the Mens page and choose second jacket {string} with {string} and {string}",
  async (product: string, size: string, color: string) => {
    mensProductsPage = new MensProductsPage(page);
    await mensProductsPage.selectJacket(product, size, color);
  }
);

When(
  "The user navigate to the Mens page and choose a pair of pants {string} with {string} and {string}",
  async (product: string, size: string, color: string) => {
    mensProductsPage = new MensProductsPage(page);
    await mensProductsPage.selectPants(product, size, color);
  }
);

When("The user navigate to the shipping page", async () => {
  shippingDetailsPage = new ShippingDetailsPage(page);
  await shippingDetailsPage.addAddress(
    data.address.street,
    data.address.city,
    data.address.country,
    data.address.region,
    data.address.postcode,
    data.address.telephone
  );
});

Then(
  "The user should verify the products {string}, {string} and {string} then complete the order",
  async (product1: string, product2: string, product3: string) => {
    verifyOrderPage = new VerifyOrderPage(page);
    await verifyOrderPage.verifyOrderSummary(product1, product2, product3);
    await verifyOrderPage.verifyAndCompleteOrder();
  }
);
