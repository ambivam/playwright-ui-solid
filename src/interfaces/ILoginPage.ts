export interface ILoginPage {
  visit(): Promise<void>;
  login(username: string, password: string): Promise<void>;
  getErrorMessage(): Promise<string>;
}