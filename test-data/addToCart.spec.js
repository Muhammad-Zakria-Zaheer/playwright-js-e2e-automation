const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/LoginPage')
const InventoryPage = require('../pages/InventoryPage')
const CartPage = require('../pages/CartPage')
const loginData = require('../test-data/loginData')

test('User can add product to cart', async ({ page }) => {

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