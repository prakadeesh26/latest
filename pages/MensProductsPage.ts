import { Page } from "playwright";
import { expect } from "playwright/test";

export class MensProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Function to navigate to the products page
  async navigateToProducts() {
    await this.page.goto("./");
  }

  // Function to select the Jackets
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

  // Function to select the Pants
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

  // Function to add selected products to cart
  async addProductsToCart() {
    const addToCartButton = this.page.getByRole("button", {
      name: "Add to Cart",
    });
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
  }
}
