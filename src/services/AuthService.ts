import { LoginPage } from "../pages/LoginPage";
import { ILoginPage } from "../interfaces/ILoginPage";

export class AuthService {
  constructor(private loginPage: ILoginPage) {}

  async loginUser(username: string, password: string) {
    await this.loginPage.visit();
    await this.loginPage.login(username, password);
  }
}