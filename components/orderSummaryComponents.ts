import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class orderSummaryComponents {
  orderSummaryContainer: Locator;
  cartItems: Locator;
  contentItemsList: Locator;
  orderSummary: Locator;

  constructor(page: Page, locator: string) {
    this.orderSummaryContainer = page.locator(locator);
    this.cartItems = this.orderSummaryContainer.locator(".items-in-cart");
    this.contentItemsList = this.cartItems.locator(".minicart-items");
    this.orderSummary = page.getByRole("tab", { name: "Items in Cart" });
  }

  async openCartItems() {
    await expect(this.orderSummary).toBeVisible();
    await this.orderSummary.click();
  }

  async validateCartItems(expectedItems: string[]) {
    await this.openCartItems();
    const items = await this.contentItemsList.locator("li").count();
    for (let i = 0; i < items; i++) {
      const item = this.contentItemsList.locator(`li:nth-child(${i + 1})`);
      const productItem = item.locator(".product-item-name");
      const itemText = await productItem.innerText();
      expect(itemText).toBe(expectedItems[i]);
    }
  }
}
