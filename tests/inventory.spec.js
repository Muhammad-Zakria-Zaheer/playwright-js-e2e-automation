const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')
const loginData = require('../test-data/loginData')
const CartPage = require('../pages/CartPage')

test.describe('Inventory Page', () => {

  test('User should land on inventory page after login', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

    await loginPage.gotoLoginPage()
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )

    await expect(await inventoryPage.verifyInventoryPageLoaded()).toContain('Products')
  })

  test('Inventory page should display 6 products', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

    await loginPage.gotoLoginPage()
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )

    const productCount = await inventoryPage.getInventoryItemCount()
    await expect(productCount).toBe(6)
  })

  test('User should see cart badge count 1 after adding one product', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await loginPage.gotoLoginPage()
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  )

  await inventoryPage.addBackpackToCart()

  const badgeCount = await inventoryPage.getCartBadgeCount()
  await expect(badgeCount).toBe('1')
})
test('User should see Sauce Labs Backpack in cart after adding product', async ({ page }) => {
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

  const itemName = await cartPage.getCartItemName()
  await expect(itemName).toContain('Sauce Labs Backpack')
})
test('User should not see cart badge after removing added product', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await loginPage.gotoLoginPage()
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  )

  await inventoryPage.addBackpackToCart()
  await inventoryPage.removeBackpackFromCart()

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0)
})

})