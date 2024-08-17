import { expect } from "@playwright/test";
import { Page } from "playwright";

export class VerifyOrderPage {
  private page: Page;
  private orderSummaryTitle = 'text=Order Summary';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyOrderSummary(product1: string, product2: string, product3: string) {
    await this.page.click(".title");
  }

  async verifyAndCompleteOrder() {
    await this.page.click("button.continue");
    await this.page.click("text=Place Order");
    
  }

}
