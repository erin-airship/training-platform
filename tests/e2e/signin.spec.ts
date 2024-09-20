import {test, expect} from "@playwright/test";
import SigninPage from '../pages/SigninPage';

test.describe('Signin page', () => {
  test('dashboard redirects to signin', async ({ page }) => {
    // Arrange
    const mockUser = {
      email: 'test@user.com',
      password: 'Changeme1!',
    };
    const signinPage = new SigninPage(page);

    await signinPage.navigate();
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

    // Act
    await signinPage.login(mockUser.email, mockUser.password);

    // Assert
    await expect(page.getByRole('heading', { name: 'COE Training' })).toBeVisible();
  });
});