import { Page } from "playwright";
import { expect } from "playwright/test";

export class MensProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProducts() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }
  async selectJacket(product: string, size: string, color: string) {
    const mensIcon = this.page.getByRole("menuitem", { name: " Men" });
    const jacketsIcon = this.page.getByRole("link", { name: "Jackets" });

    await this.navigateToProducts();
    await mensIcon.click();
    await jacketsIcon.click();

    await this.page.getByRole("link", { name: product }).first().click();
    await this.page.getByLabel(size, { exact: true }).click();
    await this.page.getByLabel(color).click();

    await this.addProductsToCart();
  }

  async selectPants(product: string, size: string, color: string) {
    const mensIcon = this.page.getByRole("menuitem", { name: " Men" });
    const pantsIcon = this.page.getByRole("link", {
      name: "Pants",
      exact: true,
    });

    await this.navigateToProducts();
    await mensIcon.click();
    await pantsIcon.click();

    await this.page.getByRole("link", { name: product }).first().click();
    await this.page.getByLabel(size).click();
    await this.page.getByLabel(color).click();

    await this.addProductsToCart();
  }

  async addProductsToCart() {
    const addToCartButton = this.page.getByRole("button", {
      name: "Add to Cart",
    });
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
  }
}
