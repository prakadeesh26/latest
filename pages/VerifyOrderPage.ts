import { expect } from "@playwright/test";
import { Page } from "playwright";
import { orderSummaryComponent } from "../components/orderSummaryComponents";

export class VerifyOrderPage {
  private page: Page;
  private recentOrders = "#my-orders-table";
  private orderSummaryComponent: orderSummaryComponent;
  constructor(page: Page) {
    this.page = page;
    this.orderSummaryComponent = new orderSummaryComponent(
      page,
      '.opc-block-summary'
    );
  }

  async verifyOrderSummary(productNames: string[]) {
    await this.orderSummaryComponent.openCartItems();
    await this.orderSummaryComponent.validateCartItems(productNames);
  }

  async verifyAndCompleteOrder() {
    await this.page.click("button.continue");
    await this.page.click("text=Place Order");
  }
}
