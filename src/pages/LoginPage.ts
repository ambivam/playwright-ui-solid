import { Page } from "@playwright/test";
import { ILoginPage } from "../interfaces/ILoginPage";
import { CONFIG } from "../config/config";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage implements ILoginPage {
  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";
  private errorMessage = "[data-test='error']";

  constructor(page: Page) {
    super(page);
  }

  async visit() {
    await this.page.goto(CONFIG.BASE_URL);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    const text = await this.page.textContent(this.errorMessage);
    return text ? text : "";

  }
}