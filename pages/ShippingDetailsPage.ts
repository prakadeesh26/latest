import { expect } from "@playwright/test";
import { Page } from "playwright";

export class ShippingDetailsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
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
    await this.page.goto(
      "./checkout/#shipping"
    );

    const newAddressIcon = this.page.getByRole("button", {
      name: "New Address",
    });
    const saveAddressCheckbox = this.page.getByRole("checkbox", {
      name: "Save in address book",
    });
    const shipHereButton = this.page.getByRole("button", { name: "Ship here" });

    await expect(newAddressIcon).toBeVisible();
    await newAddressIcon.click();

    //Fill the Australian Address details
    await this.page.fill('input[name="street[0]"]', street);
    await this.page.fill('input[name="city"]', city);
    await this.page.selectOption('select[name="country_id"]', {
      label: country,
    });
    await this.page.selectOption('select[name="region_id"]', { label: region });
    await this.page.fill('input[name="postcode"]', postcode);
    await this.page.fill('input[name="telephone"]', telephone);

    await expect(saveAddressCheckbox).toBeEditable();
    await saveAddressCheckbox.uncheck();

    await expect(shipHereButton).toBeVisible();
    await shipHereButton.click();
  }
}
