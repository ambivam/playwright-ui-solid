export interface IInventoryPage {
  getProductNames(): Promise<string[]>;
  addToCart(productName: string): Promise<void>;
}