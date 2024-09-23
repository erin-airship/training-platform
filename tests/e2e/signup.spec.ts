import {test, expect} from "@playwright/test";
import SignUpPage from "../pages/SignUpPage";

test.describe('Sign Up Page', () => {
  test('dashboard redirects to sign up', async ({ page }) => {
    // Arrange
    const mockUser = {
      email: 'test@test.com',
      password: 'Changeme1!',
    };
    const signinPage = new SignUpPage(page);

    await signinPage.navigate();
    await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

    // Act
    await signinPage.login(mockUser.email, mockUser.password);

    // Assert
    await expect(page.getByRole('heading', { name: 'COE Training' })).toBeVisible();
  });
});