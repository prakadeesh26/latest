import { expect } from "@playwright/test";
import { Page } from "playwright";

export class LoginPage {
  private page: Page;
  private emailInput = "#email";
  private passwordInput = "#pass";
  private loginButton = "#send2";

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.goto(
      "https://magento.softwaretestingboard.com/customer/account/login/"
    );
    await this.page.fill(this.emailInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await expect(this.page).toHaveTitle(/My Account/);
  }
}
