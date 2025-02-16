import { Page } from "@playwright/test";
import { IInventoryPage } from "../interfaces/IInventoryPage";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage implements IInventoryPage {
  private productList = ".inventory_item_name";
  private addToCartButton = (productName: string) =>
    `xpath=//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`;

  constructor(page: Page) {
    super(page);
  }

  async getProductNames(): Promise<string[]> {
    return this.page.$$eval(this.productList, (elements) =>
      elements.map((el) => el.textContent || "")
    );
  }

  async addToCart(productName: string) {
    await this.page.click(this.addToCartButton(productName));
  }
}