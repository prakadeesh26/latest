import { expect, Locator } from "@playwright/test";
import { Page } from "playwright";
import { orderSummaryComponents } from "../components/orderSummaryComponents";

export class VerifyOrderPage {
  private page: Page;
  private continueButton: Locator;
  private placeOrderButton: Locator;
  private recentOrders = "#my-orders-table";
  private orderSummaryComponents: orderSummaryComponents;
  constructor(page: Page) {
    this.page = page;
    this.orderSummaryComponents = new orderSummaryComponents(page, '.opc-block-summary');
  }

  async verifyOrderSummary(productNames: string[], productPrices: string[]) {
    await this.orderSummaryComponents.openCartItems();
    await this.orderSummaryComponents.validateCartItems(productNames, productPrices);
  }

  async verifyAndCompleteOrder() {
    await this.continueButton.click();
    await this.placeOrderButton.click();
  }
}
