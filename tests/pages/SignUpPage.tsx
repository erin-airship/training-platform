import { Locator, Page } from 'playwright-core';

class SignUpPage {
  readonly page: Page;
  readonly email_field: Locator;
  readonly password_field: Locator;
  readonly sign_up_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email_field = page.getByRole('textbox', { name: 'Email' });
    this.password_field = page.getByLabel('password');
    this.sign_up_button = page.getByRole('button', { name: 'Sign In' });
  }

  async navigate() {
    await this.page.goto('/signup');
  }

  async login(username, password) {
    await this.email_field.fill(username);
    await this.password_field.fill(password);
    await this.sign_up_button.click();
  }
}

export default SignUpPage;