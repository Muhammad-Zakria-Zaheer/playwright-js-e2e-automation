const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')
const CartPage = require('../pages/CartPage')
const loginData = require('../test-data/loginData')
const CheckoutPage = require('../pages/CheckoutPage')

test.describe('Cart Page', () => {
  test('User should return to inventory page after clicking continue shopping', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)

    await loginPage.gotoLoginPage()
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )

    await inventoryPage.addBackpackToCart()
    await inventoryPage.openCart()
    await cartPage.clickContinueShopping()

    await expect(await inventoryPage.verifyInventoryPageLoaded()).toContain('Products')
  })
  test('User should remove product from cart successfully', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)
  const cartPage = new CartPage(page)

  await loginPage.gotoLoginPage()
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  )

  await inventoryPage.addBackpackToCart()
  await inventoryPage.openCart()
  await cartPage.removeItem()

  await expect(page.locator('.inventory_item_name')).toHaveCount(0)
})
test('User should navigate to checkout information page after clicking checkout', async ({ page }) => {
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

  await expect(await checkoutPage.getCheckoutPageTitle()).toContain('Checkout: Your Information')
})
})