const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const loginData = require('../test-data/loginData');

test.describe('Login Scenarios', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await expect(await loginPage.getLoginPageTitle()).toContain('Swag Labs')
  });


  test('Successful login with valid credentials', async ({ page }) => {
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login fails with invalid password', async () => {
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await expect(await loginPage.getErrorMessage()).toContain(
      'Username and password do not match'
    );
  });

  test('Login fails with locked out user', async () => {
    await loginPage.login(
      loginData.lockedUser.username,
      loginData.lockedUser.password
    );

    await expect(await loginPage.getErrorMessage()).toContain(
      'Sorry, this user has been locked out'
    );
  });

  test('Login fails with empty username and password', async () => {
    await loginPage.login(
      loginData.emptyCredentials.username,
      loginData.emptyCredentials.password
    );

    await expect(await loginPage.getErrorMessage()).toContain(
      'Username is required'
    );
  });

  test('Login fails with empty username', async () => {
    await loginPage.login(
      loginData.emptyUsername.username,
      loginData.emptyUsername.password
    );

    await expect(await loginPage.getErrorMessage()).toContain(
      'Username is required'
    );
  });

  test('Login fails with empty password', async () => {
    await loginPage.login(
      loginData.emptyPassword.username,
      loginData.emptyPassword.password
    );

    await expect(await loginPage.getErrorMessage()).toContain(
      'Password is required'
    );
  });
});