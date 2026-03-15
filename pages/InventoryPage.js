class InventoryPage {
  constructor(page){
    this.page = page
    this.backpackAddButton = '#add-to-cart-sauce-labs-backpack'
    this.backpackRemoveButton = '#remove-sauce-labs-backpack'
    this.cartIcon = '.shopping_cart_link'
    this.pageTitle = '.title'
    this.inventoryItems = '.inventory_item'
    this.cartBadge = '.shopping_cart_badge'
  }

  async verifyInventoryPageLoaded(){
    return await this.page.textContent(this.pageTitle)
  }

  async getInventoryItemCount(){
    return await this.page.locator(this.inventoryItems).count()
  }

  async addBackpackToCart(){
    await this.page.click(this.backpackAddButton)
  }

  async removeBackpackFromCart(){
    await this.page.click(this.backpackRemoveButton)
  }

  async getCartBadgeCount(){
    return await this.page.textContent(this.cartBadge)
  }

  async isCartBadgeVisible(){
    return await this.page.locator(this.cartBadge).isVisible()
  }

  async openCart(){
    await this.page.click(this.cartIcon)
  }
}

module.exports = InventoryPage