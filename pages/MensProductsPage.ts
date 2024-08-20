import { Page } from "playwright";
import { expect, Locator } from "playwright/test";

export class MensProductsPage {
  private page: Page;
  private mensIcon: Locator;
  private jacketsIcon: Locator;
  private pantsIcon: Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mensIcon = this.page.getByRole("menuitem", { name: " Men" });
    this.jacketsIcon = this.page.getByRole("link", { name: "Jackets" });
    this.pantsIcon = this.page.getByRole("link", {
      name: "Pants",
      exact: true,
    });
    this.addToCartButton = this.page.getByRole("button", {
      name: "Add to Cart",
    });
  }

  // Function to select the Jackets
  async selectJacket(product: string, size: string, color: string) {
    await this.page.goto("./");
    await this.mensIcon.click();
    await this.jacketsIcon.click();

    await this.page.getByRole("link", { name: product }).first().click();
    await this.page.getByLabel(size, { exact: true }).click();
    await this.page.getByLabel(color).click();
    // const price = this.page.locator(".price");
    // console.log(price.innerText);
    // expect(price.innerText).toBe("$49.00");
    await this.addToCartButton.click();
  }

  // Function to select the Pants
  async selectPants(product: string, size: string, color: string) {
    await this.page.goto("./");
    await this.mensIcon.click();
    await this.pantsIcon.click();

    await this.page.getByRole("link", { name: product }).first().click();
    await this.page.getByLabel(size).click();
    await this.page.getByLabel(color).click();

    await this.addToCartButton.click();
  }
}
