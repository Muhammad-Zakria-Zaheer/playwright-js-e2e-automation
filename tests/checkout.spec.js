const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')
const CartPage = require('../pages/CartPage')
const CheckoutPage = require('../pages/CheckoutPage')
const loginData = require('../test-data/loginData')
const checkoutData = require('../test-data/checkoutData')

test.describe('Checkout Page', () => {
  test('User should continue to checkout overview page after entering checkout information', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)

    await loginPage.gotoLoginPage()
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )

    await inventoryPage.addBackpackToCart()
    await inventoryPage.openCart()
    await cartPage.clickCheckout()

    await checkoutPage.fillCheckoutInformation(
      checkoutData.validCheckoutUser.firstName,
      checkoutData.validCheckoutUser.lastName,
      checkoutData.validCheckoutUser.postalCode
    )

    await checkoutPage.clickContinue()

    await expect(await checkoutPage.getCheckoutPageTitle()).toContain('Checkout: Overview')
  })

  test('User should complete order successfully', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)

    await loginPage.gotoLoginPage()
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )

    await inventoryPage.addBackpackToCart()
    await inventoryPage.openCart()
    await cartPage.clickCheckout()

    await checkoutPage.fillCheckoutInformation(
      checkoutData.validCheckoutUser.firstName,
      checkoutData.validCheckoutUser.lastName,
      checkoutData.validCheckoutUser.postalCode
    )

    await checkoutPage.clickContinue()
    await checkoutPage.clickFinish()

    await expect(await checkoutPage.getSuccessMessage()).toContain('Thank you for your order')
  })
})