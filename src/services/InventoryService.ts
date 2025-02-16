import { InventoryPage } from "../pages/InventoryPage";
import { IInventoryPage } from "../interfaces/IInventoryPage";

export class InventoryService {
  constructor(private inventoryPage: IInventoryPage) {}

  async getAllProducts(): Promise<string[]> {
    return this.inventoryPage.getProductNames();
  }

  async addProductToCart(productName: string) {
    await this.inventoryPage.addToCart(productName);
  }
}