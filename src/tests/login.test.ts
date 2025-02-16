import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AuthService } from "../services/AuthService";
import users from "../data/users.json";

test.describe("Login Tests", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginService = new AuthService(new LoginPage(page));
    await loginService.loginUser(users.validUser.username, users.validUser.password);

    await expect(page).toHaveURL(/inventory.html/);
  });

  test("should show error on invalid login", async ({ page }) => {
    const loginService = new AuthService(new LoginPage(page));
    await loginService.loginUser(users.invalidUser.username, users.invalidUser.password);

    const errorMessage = await new LoginPage(page).getErrorMessage();
    expect(errorMessage).toContain("Epic sadface");
  });
});