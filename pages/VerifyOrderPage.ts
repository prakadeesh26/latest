import { expect } from "@playwright/test";
import { Page } from "playwright";
import { orderSummaryComponents } from "../components/orderSummaryComponents";

export class VerifyOrderPage {
  private page: Page;
  private recentOrders = "#my-orders-table";
  private orderSummaryComponents: orderSummaryComponents;
  constructor(page: Page) {
    this.page = page;
    this.orderSummaryComponents = new orderSummaryComponents(page, '.opc-block-summary');
  }

  async verifyOrderSummary(productNames:string[]) {
    await this.orderSummaryComponents.openCartItems();
    await this.orderSummaryComponents.validateCartItems(productNames);
  }

  async verifyAndCompleteOrder() {
    await this.page.click("button.continue");
    await this.page.click("text=Place Order");
  }
}
