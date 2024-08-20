import { expect, Locator } from "@playwright/test";
import { Page } from "playwright";

export class ShippingDetailsPage {
  private page: Page;
  private newAddressIcon: Locator;
  private saveAddressCheckbox: Locator;
  private shipHereButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newAddressIcon = this.page.getByRole("button", {
      name: "New Address",
    });
    this.saveAddressCheckbox = this.page.getByRole("checkbox", {
      name: "Save in address book",
    });
    this.shipHereButton = this.page.getByRole("button", { name: "Ship here" });
  }

  // Function to add new address details
  async addAddress(
    street: string,
    city: string,
    country: any,
    region: any,
    postcode: string,
    telephone: string
  ) {
    await this.page.goto("./checkout/#shipping");
    await expect(this.newAddressIcon).toBeVisible();
    await this.newAddressIcon.click();

    //Fill the Australian Address details
    await this.page.fill('input[name="street[0]"]', street);
    await this.page.fill('input[name="city"]', city);
    await this.page.selectOption('select[name="country_id"]', {
      label: country,
    });
    await this.page.selectOption('select[name="region_id"]', { label: region });
    await this.page.fill('input[name="postcode"]', postcode);
    await this.page.fill('input[name="telephone"]', telephone);

    await expect(this.saveAddressCheckbox).toBeEditable();
    await this.saveAddressCheckbox.uncheck();

    await expect(this.shipHereButton).toBeVisible();
    await this.shipHereButton.click();
  }
}
